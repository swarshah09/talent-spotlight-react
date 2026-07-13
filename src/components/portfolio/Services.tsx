import { motion } from 'framer-motion';
import styles from './Services.module.scss';
import { services } from '@/data/portfolio';
import { AnimatedSection, revealItem, revealItemLg, revealItemSm } from './AnimatedSection';
import { spring } from '@/lib/motion';

export function Services() {
  return (
    <AnimatedSection
      id="services"
      className={styles.section}
      data-testid="services-section"
      stagger={0.09}
    >
      <div className={styles.inner}>
        <motion.span className={styles.eyebrow} variants={revealItem}>
          My Services
        </motion.span>
        <motion.h2 className={styles.heading} variants={revealItem}>
          What I can <em>build</em> for your team.
        </motion.h2>

        <motion.div className={styles.grid} variants={revealItem}>
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              className={styles.card}
              data-testid={`service-card-${i}`}
              variants={revealItemLg}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={spring}
            >
              <div className={styles.head}>
                <span className={styles.n}>[{s.n}]</span>
                <h3 className={styles.title}>{s.title}</h3>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              >
                {s.points.map((p) => (
                  <motion.li key={p} variants={revealItemSm}>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
