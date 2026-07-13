import { motion } from 'framer-motion';
import styles from './Work.module.scss';
import { projects } from '@/data/portfolio';
import { AnimatedSection, revealItem, revealItemLg } from './AnimatedSection';
import { spring } from '@/lib/motion';

// Repeat the marquee track twice so translating -50% yields a seamless loop.
const MARQUEE_ITEMS = 6;

export function Work() {
  return (
    <section id="work" className={styles.section} data-testid="work-section">
      <div className={styles.marquee} aria-hidden data-testid="work-marquee">
        <div className={styles.track}>
          {Array.from({ length: MARQUEE_ITEMS * 2 }).map((_, i) => (
            <span key={i} className={styles.item}>
              Selected work <span className={styles.star}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <AnimatedSection as="div" className={styles.inner} stagger={0.1}>
        <motion.div className={styles.grid} variants={revealItem}>
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              className={styles.card}
              data-testid={`project-card-${i}`}
              variants={revealItemLg}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={spring}
            >
              <div className={styles.thumb}>
                <span className={styles.initials}>
                  {p.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </span>
              </div>
              <div className={styles.meta}>
                <div className={styles.tag}>{p.category}</div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.stack}>{p.date}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
