import { motion } from 'framer-motion';
import styles from './Contact.module.scss';
import { profile } from '@/data/portfolio';
import { AnimatedSection, revealItem, revealItemLg } from './AnimatedSection';
import { spring } from '@/lib/motion';

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className={styles.section}
      data-testid="contact-section"
      stagger={0.1}
    >
      <div className={styles.inner}>
        <motion.span className={styles.eyebrow} variants={revealItem}>
          Contact
        </motion.span>
        <motion.h2 className={styles.heading} variants={revealItem}>
          Have a role or a project in mind?
          <br />
          <em>Let's build it.</em>
        </motion.h2>

        <motion.div className={styles.actions} variants={revealItemLg}>
          <motion.a
            href={`mailto:${profile.email}`}
            className={styles.primary}
            data-testid="contact-email"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            {profile.email} <span aria-hidden>↗</span>
          </motion.a>
          <motion.a
            href={`tel:${profile.phone}`}
            className={styles.secondary}
            data-testid="contact-phone"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
          >
            {profile.phone}
          </motion.a>
        </motion.div>

        <motion.div className={styles.links} variants={revealItem}>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
