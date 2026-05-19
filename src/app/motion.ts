import type { Variants } from 'motion/react';

export const engineeredEase = [0.16, 1, 0.3, 1] as const;
export const preciseEase = [0.65, 0, 0.35, 1] as const;

export const viewportOnce = {
  once: true,
  amount: 0.24
} as const;

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.46,
      ease: engineeredEase
    }
  }
};

export const revealSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 18
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: engineeredEase
    }
  }
};

export const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -28
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: engineeredEase
    }
  }
};

export const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 28
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: engineeredEase
    }
  }
};

export function stagger(index: number, base = 0.06) {
  return {
    delay: index * base,
    duration: 0.4,
    ease: engineeredEase
  };
}
