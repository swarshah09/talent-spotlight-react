import styles from './Contact.module.scss';
import { profile } from '@/data/portfolio';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Contact</span>
        <h2 className={styles.heading}>
          Have a role or a project in mind?
          <br />
          <em>Let's build it.</em>
        </h2>

        <div className={styles.actions}>
          <a href={`mailto:${profile.email}`} className={styles.primary}>
            {profile.email} <span aria-hidden>↗</span>
          </a>
          <a href={`tel:${profile.phone}`} className={styles.secondary}>{profile.phone}</a>
        </div>

        <div className={styles.links}>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.links.resume} target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </div>
    </section>
  );
}
