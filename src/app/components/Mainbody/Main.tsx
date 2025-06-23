import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="text-center">Get things done by awesome remote team</h1>
            <p className={`${styles.heroDescription} text-center text-large`}>
              We share common trends and strategies for improving your rental income and making sure you stay in high demand.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.button}>
                Get started for free
                <svg className={styles.arrow} width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M12.5 1L19 8L12.5 15M19 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="/demos" className={styles.learnMore}>Learn more</a>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.mockup}>
              <img
                src="session.svg"
                alt="Dashboard mockup"
                className={styles.dashboardImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 6H28V26H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 10H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Project management</h3>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            
            <div className="card">
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 8V16L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Time tracking</h3>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            
            <div className="card">
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6" y="2" width="20" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Beautiful mobile app</h3>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2>Getting started with Albino is easier than ever</h2>
              <p className="text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              <button className={styles.button}>
                Get started for free
                <svg className={styles.arrow} width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M12.5 1L19 8L12.5 15M19 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className={styles.ctaImage}>
              <img
                src="Images.svg"
                alt="Analytics dashboard"
                className={styles.analyticsImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <p>Customers visit Albino every month</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">93%</div>
              <p>Satisfaction rate from our customers</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <p>Average customer ratings out of 5.00!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className={styles.processHeader}>
            <h2 className="text-center">Manage your projects fast</h2>
            <p className="text-center text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
          
          <div className={styles.processGrid}>
            <div className={styles.processImage}>
              <img
                src="Sketch.svg"
                alt="Project management interface"
                className={styles.projectImage}
              />
            </div>
            
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Create a project</h3>
                  <p>With lots of unique blocks, you can easily build a page without coding.</p>
                </div>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Assign related people</h3>
                  <p>With lots of unique blocks, you can easily build a page without coding.</p>
                </div>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Make it done on-time</h3>
                  <p>With lots of unique blocks, you can easily build a page without coding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <div className={styles.testimonial}>
                <div className={styles.testimonialAvatar}>
                  <img
                    src="Corey.svg"
                    alt="Corey Valdez"
                    className={styles.avatar}
                  />
                </div>
                <h3>"You made it so simple"</h3>
                <p>My new site is so much faster and easier to work with than my old site.</p>
                <div className={styles.testimonialAuthor}>
                  <h4>Corey Valdez</h4>
                  <p>Founder at Zenix</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className={styles.testimonial}>
                <div className={styles.testimonialAvatar}>
                  <img
                    src="Ian.svg"
                    alt="Ian Klein"
                    className={styles.avatar}
                  />
                </div>
                <h3>"Simply the best"</h3>
                <p>Better than all the rest. I'd recommend this product to beginners.</p>
                <div className={styles.testimonialAuthor}>
                  <h4>Ian Klein</h4>
                  <p>Digital Marketer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-dark">
        <div className="container">
          <div className={styles.pricingHeader}>
            <h2 className="text-center">Pricing & Plans</h2>
            <p className="text-center text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card card-dark">
              <div className={styles.pricingCard}>
                <h4 className={styles.planName}>BASIC</h4>
                <div className={styles.price}>$29</div>
                <p className={styles.planDescription}>One time purchase</p>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                <button className={styles.button}>Get started for free</button>
              </div>
            </div>
            
            <div className="card card-dark">
              <div className={styles.pricingCard}>
                <h4 className={styles.planName}>STANDARD</h4>
                <div className={styles.price}>$49</div>
                <p className={styles.planDescription}>One time purchase</p>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                <button className={styles.button}>Get started for free</button>
              </div>
            </div>
            
            <div className="card card-dark">
              <div className={styles.pricingCard}>
                <h4 className={styles.planName}>PREMIUM</h4>
                <div className={styles.price}>$99</div>
                <p className={styles.planDescription}>One time purchase</p>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                <button className={styles.button}>Get started for free</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}