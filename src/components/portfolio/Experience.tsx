import styles from './Experience.module.scss';
import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Experience</span>
        <h2 className={styles.heading}>
          A track record of shipping production systems
          <br />
          across <em>Fintech</em> and <em>enterprise</em> teams.
        </h2>

        <ul className={styles.list}>
          {experiences.map((e) => (
            <li key={e.role + e.company} className={styles.item}>
              <div className={styles.period}>{e.period}</div>
              <div className={styles.body}>
                <h3 className={styles.role}>{e.role}</h3>
                <div className={styles.company}>{e.company}</div>
                <p className={styles.summary}>{e.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
