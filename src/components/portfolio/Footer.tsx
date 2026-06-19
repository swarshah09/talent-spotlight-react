import styles from './Footer.module.scss';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div>Built with React · TanStack Start · SCSS</div>
      </div>
    </footer>
  );
}
