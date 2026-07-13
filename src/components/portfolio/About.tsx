import { motion } from 'framer-motion';
import styles from './About.module.scss';
import { education, certifications, skills } from '@/data/portfolio';
import { AnimatedSection, revealItem, revealItemLg, revealItemSm } from './AnimatedSection';

export function About() {
  return (
    <AnimatedSection
      id="about"
      className={styles.section}
      data-testid="about-section"
      stagger={0.09}
    >
      <div className={styles.inner}>
        <motion.span className={styles.eyebrow} variants={revealItem}>
          About Me
        </motion.span>
        <motion.h2 className={styles.heading} variants={revealItem}>
          Behind every great system is a
          <br />
          <em>great architectural decision.</em>
        </motion.h2>

        <motion.p className={styles.lead} variants={revealItem}>
          I'm a Results-driven Software Developer with 1+ years of hands-on experience building
          scalable, event-driven full-stack web applications across Fintech and enterprise domains.
          AWS Certified Developer with a strong foundation in DSA and a portfolio of 4+ independently
          shipped products.
        </motion.p>

        <motion.div className={styles.grid} variants={revealItem}>
          <motion.div className={styles.col} variants={revealItemLg}>
            <h4>Education</h4>
            <div className={styles.eduTitle}>{education.degree}</div>
            <div className={styles.eduMeta}>{education.school}</div>
            <div className={styles.eduMeta}>
              {education.period} · {education.cgpa}
            </div>
          </motion.div>

          <motion.div className={styles.col} variants={revealItemLg}>
            <h4>Certifications</h4>
            <motion.ul
              className={styles.certs}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {certifications.map((c) => (
                <motion.li key={c} variants={revealItemSm}>
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div className={styles.skills} variants={revealItem}>
          <h4>Technical Skills</h4>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.skillRow}>
              <span className={styles.skillLabel}>{group}</span>
              <motion.div
                className={styles.skillTags}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
              >
                {items.map((it) => (
                  <motion.span key={it} variants={revealItemSm}>
                    {it}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
