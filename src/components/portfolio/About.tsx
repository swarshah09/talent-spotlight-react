import styles from './About.module.scss';
import { education, certifications, skills } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>About Me</span>
        <h2 className={styles.heading}>
          Behind every great system is a
          <br />
          <em>great architectural decision.</em>
        </h2>

        <p className={styles.lead}>
          I'm a Results-driven Software Developer with 1+ years of hands-on experience building
          scalable, event-driven full-stack web applications across Fintech and enterprise domains.
          AWS Certified Developer with a strong foundation in DSA and a portfolio of 4+ independently
          shipped products.
        </p>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h4>Education</h4>
            <div className={styles.eduTitle}>{education.degree}</div>
            <div className={styles.eduMeta}>{education.school}</div>
            <div className={styles.eduMeta}>{education.period} · {education.cgpa}</div>
          </div>

          <div className={styles.col}>
            <h4>Certifications</h4>
            <ul className={styles.certs}>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.skills}>
          <h4>Technical Skills</h4>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.skillRow}>
              <span className={styles.skillLabel}>{group}</span>
              <div className={styles.skillTags}>
                {items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
