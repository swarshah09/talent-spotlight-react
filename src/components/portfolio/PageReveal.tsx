import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './PageReveal.module.scss';

/**
 * Brief page-load reveal: an accent-colored bar sweeps across, then a diamond
 * mark fades out. Total under 800ms. Skippable via click / any key.
 */
export function PageReveal() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 750);
    const skip = () => setDone(true);
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('pointerdown', skip, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [reduce]);

  if (done) return null;

  return (
    <motion.div
      className={styles.overlay}
      data-testid="page-reveal-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden
    >
      <motion.span
        className={styles.mark}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        ◆
      </motion.span>
      <motion.div
        className={styles.bar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
      />
    </motion.div>
  );
}
