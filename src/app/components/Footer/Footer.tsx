import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about the product and billing.</p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>Can I use Brainwave for my clients?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.</p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>Does it work with WordPress?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>Do I get free updates?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>Will you provide support?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>Can I cancel at anytime?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              </div>
            </div>

            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <h3>How do I change my account email?</h3>
                <svg className={styles.faqIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.faqAnswer}>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.supportSection}>
          <div className={styles.supportContent}>
            <div className={styles.supportAvatar}>
              <img src="/Corey.svg" alt="Support team" />
              <img src="/Ian.svg" alt="Support team" />
            </div>
            <div>
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            </div>
          </div>
          <button className={styles.supportButton}>Get in touch</button>
        </div>
      </div>
    </footer>
  );
}