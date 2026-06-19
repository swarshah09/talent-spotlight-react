import styles from './Hero.module.scss';
import { profile } from '@/data/portfolio';
import portrait from '@/assets/hero-portrait.jpg';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.available}>
        <span className={styles.pulse} /> {profile.available}
      </div>

      <div className={styles.portraitWrap}>
        <img
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          className={styles.portrait}
          width={896}
          height={896}
        />
        <h1 className={styles.signature}>{profile.name.split(' ')[0]}</h1>
      </div>

      <p className={styles.intro}>
        Hi, I'm <strong>{profile.name}</strong>,
        <br />
        Working as <strong>{profile.role}</strong> — {profile.tagline}
      </p>

      <ul className={styles.socials}>
        <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></li>
        <li><a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a></li>
        <li><a href={`mailto:${profile.email}`} aria-label="Email">@</a></li>
        <li><a href={`tel:${profile.phone}`} aria-label="Phone">☎</a></li>
      </ul>

      <div className={styles.ctas}>
        <a href="#contact" className={styles.primary}>
          Get in touch <span aria-hidden>↗</span>
        </a>
        <a href="#work" className={styles.secondary}>View My Work</a>
      </div>

      <div className={styles.stats}>
        {profile.stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
