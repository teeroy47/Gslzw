import { readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const removableRootMedia = new Set([
  'company-profile-media.jpg',
  'cta-background.jpg',
  'hero-background.mp4',
  'hero-slide-1.jpg',
  'hero-slide-2.jpg',
  'hero-slide-3.jpg',
  'hero-slide-4.jpg',
  'service-binder-distribution-calibration.jpg',
  'service-foundation-design.jpg',
  'service-pavement-design.jpg',
  'service-project-management.jpg',
  'service-quality-control-testing.jpg',
  'service-soil-testing.jpg',
  'team-maxwell-changa-karinge.jpeg',
  'team-pk-changachirere.jpeg'
]);

async function directorySize(dir) {
  let total = 0;

  async function walk(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await walk(entryPath);
      } else {
        const entryStat = await stat(entryPath);
        total += entryStat.size;
      }
    }
  }

  await walk(dir);
  return total;
}

const beforeBytes = await directorySize(distDir);

for (const fileName of removableRootMedia) {
  await rm(path.join(distDir, fileName), { force: true });
}

const afterBytes = await directorySize(distDir);
const savedMb = (beforeBytes - afterBytes) / 1024 / 1024;
const finalMb = afterBytes / 1024 / 1024;

console.log(
  `pruned redundant root media from dist: saved ${savedMb.toFixed(1)} MB, final dist ${finalMb.toFixed(1)} MB`
);
