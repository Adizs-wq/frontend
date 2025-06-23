import Link from 'next/link';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span>Brainwave.io</span>
          </div>
          
          <nav className={styles.nav}>
            <a href="/demos" className={styles.navLink}>Demos</a>
            <a href="/pages" className={styles.navLink}>Pages</a>
            <a href="/support" className={styles.navLink}>Support</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.headerActions}>
            <button className={styles.button}>Get started for free</button>
          </div>
        </div>
      </div>
    </header>
  );
}