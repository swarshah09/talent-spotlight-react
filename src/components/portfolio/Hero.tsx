import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import { profile } from '@/data/portfolio';
import portraitAsset from '@/assets/profile-photo.jpg.asset.json';
import { easeOutExpo, softSpring, spring } from '@/lib/motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const iconItem = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: softSpring },
};

export function Hero() {
  return (
    <motion.section
      id="top"
      className={styles.hero}
      data-testid="hero-section"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Ambient orange glow blob behind the portrait */}
      <div className={styles.ambient} aria-hidden>
        <span className={styles.blobA} />
        <span className={styles.blobB} />
      </div>

      <motion.div className={styles.available} variants={item}>
        <span className={styles.pulse} /> {profile.available}
      </motion.div>

      <motion.div
        className={styles.portraitWrap}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.95, ease: easeOutExpo, delay: 0.05 }}
      >
        <img
          src={portraitAsset.url}
          alt={`Portrait of ${profile.name}`}
          className={styles.portrait}
          width={896}
          height={896}
        />
        <motion.h1
          className={styles.signature}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.35 }}
        >
          {profile.name.split(' ')[0]}
        </motion.h1>
      </motion.div>

      <motion.p className={styles.intro} variants={item}>
        Hi, I'm <strong>{profile.name}</strong>,
        <br />
        Working as <strong>{profile.role}</strong> — {profile.tagline}
      </motion.p>

      <motion.ul className={styles.socials} variants={item}>
        {[
          { href: profile.links.linkedin, label: 'LinkedIn', text: 'in', ext: true },
          { href: profile.links.github, label: 'GitHub', text: 'gh', ext: true },
          { href: `mailto:${profile.email}`, label: 'Email', text: '@', ext: false },
          { href: `tel:${profile.phone}`, label: 'Phone', text: '☎', ext: false },
        ].map((s) => (
          <motion.li
            key={s.label}
            variants={iconItem}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={spring}
          >
            <a
              href={s.href}
              aria-label={s.label}
              data-testid={`social-${s.label.toLowerCase()}`}
              {...(s.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {s.text}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className={styles.ctas} variants={item}>
        <motion.a
          href="#contact"
          className={styles.primary}
          data-testid="cta-contact"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={spring}
        >
          Get in touch <span aria-hidden>↗</span>
        </motion.a>
        <motion.a
          href="#work"
          className={styles.secondary}
          data-testid="cta-work"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={spring}
        >
          View My Work
        </motion.a>
      </motion.div>

      <motion.div className={styles.stats} variants={container}>
        {profile.stats.map((s) => (
          <motion.div key={s.label} className={styles.stat} variants={item}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
