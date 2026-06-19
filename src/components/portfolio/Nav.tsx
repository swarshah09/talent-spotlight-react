import styles from './Nav.module.scss';
import { profile } from '@/data/portfolio';

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.mark}>◆</span> {profile.name.split(' ')[0]}
        </a>

        <nav className={styles.links}>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.location}>
          <span className={styles.dot} />
          {profile.location}
        </div>
      </div>
    </header>
  );
}
