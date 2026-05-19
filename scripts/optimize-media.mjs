import { access, copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import ffmpegStatic from 'ffmpeg-static';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);

const root = process.cwd();
const publicDir = path.join(root, 'public');
const outputDir = path.join(publicDir, 'optimized');
const imageWidths = [480, 768, 1024, 1440, 1920];
const imageExtensions = new Set(['.jpg', '.jpeg', '.png']);
const videoExtensions = new Set(['.mp4', '.mov', '.m4v']);
const manifest = {
  images: {},
  videos: {}
};

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function isFresh(sourcePath, outputPaths) {
  if (outputPaths.length === 0) return false;

  try {
    const sourceStat = await stat(sourcePath);
    const outputStats = await Promise.all(outputPaths.map((outputPath) => stat(outputPath)));
    return outputStats.every((outputStat) => outputStat.mtimeMs >= sourceStat.mtimeMs);
  } catch {
    return false;
  }
}

async function listPublicMedia() {
  const entries = await readdir(publicDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      return imageExtensions.has(ext) || videoExtensions.has(ext);
    });
}

function publicUrl(fileName) {
  return `/optimized/${fileName}`.replaceAll('\\', '/');
}

async function optimizeImage(fileName) {
  const sourcePath = path.join(publicDir, fileName);
  const parsed = path.parse(fileName);
  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  const originalWidth = metadata.width ?? imageWidths.at(-1);
  const usableWidths = imageWidths.filter((width) => width <= originalWidth);
  const widths = usableWidths.length > 0 ? usableWidths : [originalWidth];
  const variants = [];

  for (const width of widths) {
    const webpName = `${parsed.name}-${width}.webp`;
    const webpPath = path.join(outputDir, webpName);
    const fallbackExt = parsed.ext.toLowerCase() === '.png' ? 'png' : 'jpg';
    const fallbackName = `${parsed.name}-${width}.${fallbackExt}`;
    const fallbackPath = path.join(outputDir, fallbackName);

    if (!(await isFresh(sourcePath, [webpPath]))) {
      await sharp(sourcePath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(webpPath);
    }

    if (!(await isFresh(sourcePath, [fallbackPath]))) {
      if (fallbackExt === 'png') {
        await sharp(sourcePath)
          .resize({ width, withoutEnlargement: true })
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toFile(fallbackPath);
      } else {
        await sharp(sourcePath)
          .resize({ width, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toFile(fallbackPath);
      }
    }

    variants.push({
      width,
      webp: publicUrl(webpName),
      fallback: publicUrl(fallbackName)
    });
  }

  manifest.images[fileName] = {
    width: originalWidth,
    height: metadata.height,
    format: metadata.format,
    variants
  };

  console.log(`image ${fileName}: ${variants.length} responsive variants`);
}

async function getFfmpegPath() {
  const candidates = [ffmpegStatic, 'ffmpeg'].filter(Boolean);

  for (const candidate of candidates) {
    try {
      await execFileAsync(candidate, ['-version'], { windowsHide: true });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }

  return null;
}

async function optimizeVideo(fileName, ffmpegPath) {
  const sourcePath = path.join(publicDir, fileName);
  const parsed = path.parse(fileName);
  const sourceStats = await stat(sourcePath);
  const mp4Name = `${parsed.name}-optimized.mp4`;
  const webmName = `${parsed.name}-optimized.webm`;
  const mp4Path = path.join(outputDir, mp4Name);
  const webmPath = path.join(outputDir, webmName);

  if (ffmpegPath && !(await isFresh(sourcePath, [mp4Path, webmPath]))) {
    await execFileAsync(
      ffmpegPath,
      [
        '-y',
        '-i',
        sourcePath,
        '-vf',
        "scale='min(1280,iw)':-2",
        '-c:v',
        'libx264',
        '-preset',
        'slow',
        '-crf',
        '27',
        '-movflags',
        '+faststart',
        '-an',
        mp4Path
      ],
      { windowsHide: true, maxBuffer: 1024 * 1024 * 10 }
    );

    await execFileAsync(
      ffmpegPath,
      [
        '-y',
        '-i',
        sourcePath,
        '-vf',
        "scale='min(1280,iw)':-2",
        '-c:v',
        'libvpx-vp9',
        '-b:v',
        '0',
        '-crf',
        '36',
        '-an',
        webmPath
      ],
      { windowsHide: true, maxBuffer: 1024 * 1024 * 10 }
    );
  } else if (!ffmpegPath && !(await exists(mp4Path))) {
    await copyFile(sourcePath, mp4Path);
  }

  manifest.videos[fileName] = {
    originalBytes: sourceStats.size,
    mp4: publicUrl(mp4Name),
    webm: (await exists(webmPath)) ? publicUrl(webmName) : undefined,
    optimizedWithFfmpeg: Boolean(ffmpegPath)
  };

  console.log(
    ffmpegPath
      ? `video ${fileName}: optimized MP4 + WebM`
      : `video ${fileName}: ffmpeg not found, copied original as fallback`
  );
}

await mkdir(outputDir, { recursive: true });

const mediaFiles = await listPublicMedia();
const ffmpegPath = await getFfmpegPath();

for (const fileName of mediaFiles) {
  const ext = path.extname(fileName).toLowerCase();

  if (imageExtensions.has(ext)) {
    await optimizeImage(fileName);
  }

  if (videoExtensions.has(ext)) {
    await optimizeVideo(fileName, ffmpegPath);
  }
}

await writeFile(
  path.join(outputDir, 'media-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

console.log(`media manifest written to ${path.relative(root, path.join(outputDir, 'media-manifest.json'))}`);
