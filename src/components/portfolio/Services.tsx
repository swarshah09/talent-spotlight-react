import styles from './Services.module.scss';
import { services } from '@/data/portfolio';

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>My Services</span>
        <h2 className={styles.heading}>
          What I can <em>build</em> for your team.
        </h2>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.n} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.n}>[{s.n}]</span>
                <h3 className={styles.title}>{s.title}</h3>
              </div>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
