import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Nav.module.scss';
import { profile } from '@/data/portfolio';

const LINKS = [
  { href: '#work', label: 'Work', id: 'work' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
] as const;

export function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  // Toggle nav elevation once user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: mark the section closest to the top as active
  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      data-testid="site-nav"
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.6 }}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} data-testid="nav-logo">
          <span className={styles.mark}>◆</span> {profile.name.split(' ')[0]}
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.href}
              data-testid={`nav-link-${l.id}`}
              className={active === l.id ? styles.active : undefined}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className={styles.underline}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className={styles.location}>
          <span className={styles.dot} />
          {profile.location}
        </div>
      </div>
    </motion.header>
  );
}
