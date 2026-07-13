import type { Variants, Transition } from 'framer-motion';

/**
 * Shared framer-motion variants + tokens for the portfolio.
 * Keep transforms + opacity only — GPU friendly. No layout thrashing.
 * Respect prefers-reduced-motion via <MotionConfig reducedMotion="user"> in __root.
 */

export const easeOutExpo: Transition['ease'] = [0.16, 1, 0.3, 1];

export const spring = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 22,
  mass: 0.6,
};

export const softSpring = {
  type: 'spring' as const,
  stiffness: 180,
  damping: 24,
  mass: 0.9,
};

/** Container that staggers its children on scroll into view. */
export const staggerContainer = (stagger = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/** Fade + slide up (default direction) */
export const fadeUp = (distance = 16, duration = 0.7): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeOutExpo },
  },
});

/** Fade + slide in from a given axis */
export const fadeIn = (axis: 'x' | 'y' = 'y', distance = 12, duration = 0.6): Variants => {
  const hidden = axis === 'x' ? { opacity: 0, x: distance } : { opacity: 0, y: distance };
  const show = axis === 'x'
    ? { opacity: 1, x: 0, transition: { duration, ease: easeOutExpo } }
    : { opacity: 1, y: 0, transition: { duration, ease: easeOutExpo } };
  return { hidden, show };
};

/** Subtle scale + fade — used for hero portrait/signature reveal */
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

/** Viewport defaults for once-only reveal */
export const viewportOnce = { once: true, amount: 0.2 } as const;
