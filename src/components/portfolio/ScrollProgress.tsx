import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.scss';

/**
 * Fixed thin progress bar at the very top of the viewport.
 * Uses framer-motion's useScroll (already dependency-free) with a smoothing spring.
 * GPU-friendly: scaleX transform only, no layout thrash.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={styles.bar}
      data-testid="scroll-progress"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
