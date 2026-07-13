import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './Experience.module.scss';
import { experiences } from '@/data/portfolio';
import { AnimatedSection, revealItem, revealItemLg } from './AnimatedSection';

export function Experience() {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 80%', 'end 60%'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.5 });
  const height = useTransform(smooth, [0, 1], ['0%', '100%']);

  return (
    <AnimatedSection
      id="experience"
      className={styles.section}
      data-testid="experience-section"
      stagger={0.09}
    >
      <div className={styles.inner}>
        <motion.span className={styles.eyebrow} variants={revealItem}>
          Experience
        </motion.span>
        <motion.h2 className={styles.heading} variants={revealItem}>
          A track record of shipping production systems
          <br />
          across <em>Fintech</em> and <em>enterprise</em> teams.
        </motion.h2>

        <div className={styles.timelineWrap}>
          {/* Vertical rail + progress line that draws as you scroll */}
          <div className={styles.rail} aria-hidden>
            <motion.div className={styles.progress} style={{ height }} />
          </div>

          <motion.ul
            ref={listRef}
            className={styles.list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {experiences.map((e, i) => (
              <motion.li
                key={e.role + e.company}
                className={styles.item}
                data-testid={`experience-item-${i}`}
                variants={revealItemLg}
              >
                <span className={styles.node} aria-hidden />
                <div className={styles.period}>{e.period}</div>
                <div className={styles.body}>
                  <h3 className={styles.role}>{e.role}</h3>
                  <div className={styles.company}>{e.company}</div>
                  <p className={styles.summary}>{e.summary}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
