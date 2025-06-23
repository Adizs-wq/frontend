import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.faqSection}>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <div className={styles.faqHeader}>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Can I use Albino for my clients?</h3>
              </div>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
              <a href="/demos" className={styles.faqLink}>Click to learn more</a>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqHeader}>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Does it work with WordPress?</h3>
              </div>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqHeader}>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Do I get free updates?</h3>
              </div>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqHeader}>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>Will you provide support?</h3>
              </div>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
            </div>
          </div>
        </div>

        <div className={styles.supportSection}>
          <p className={styles.supportText}>Haven't got your answer?</p>
          <a href="/support" className={styles.supportLink}>Contact our support now</a>
        </div>
      </div>
    </footer>
  );
}