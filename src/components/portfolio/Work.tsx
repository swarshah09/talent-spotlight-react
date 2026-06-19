import styles from './Work.module.scss';
import { projects } from '@/data/portfolio';

export function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.marquee} aria-hidden>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>
            Selected work <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {projects.map((p) => (
            <a key={p.title} href={p.href} className={styles.card}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
