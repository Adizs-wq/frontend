import Link from 'next/link';
import styles from './styles.module.css';

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>✨ New features available</span>
            </div>
            <h1>Get things done by awesome remote team</h1>
            <p className={`${styles.heroDescription} text-large`}>
              We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton}>
                Get started for free
                <svg className={styles.arrow} width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M12.5 1L19 8L12.5 15M19 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.secondaryButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5L15 10L8 15V5Z" fill="currentColor"/>
                </svg>
                Watch demo
              </button>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.mockup}>
              <img
                src="/session.svg"
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
          <div className={styles.featuresHeader}>
            <h2>Everything you need to manage projects</h2>
            <p className="text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
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
              <h2>Getting started with Brainwave is easier than ever</h2>
              <p className="text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.</p>
              <div className={styles.ctaFeatures}>
                <div className={styles.ctaFeature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                  </svg>
                  <span>Unlimited projects</span>
                </div>
                <div className={styles.ctaFeature}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                  </svg>
                  <span>No setup fees</span>
                </div>
              </div>
              <button className={styles.primaryButton}>
                Get started for free
                <svg className={styles.arrow} width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M12.5 1L19 8L12.5 15M19 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className={styles.ctaImage}>
              <img
                src="/Images.svg"
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
              <div className="stat-number">10k+</div>
              <p>Customers visit Brainwave every month to get their tasks done</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <p>Satisfaction rate comes from our awesome customers</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <p>Average customer ratings we have got all over internet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className={styles.processHeader}>
            <h2>Manage your projects fast</h2>
            <p className="text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
          
          <div className={styles.processGrid}>
            <div className={styles.processImage}>
              <img
                src="/Sketch.svg"
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
          <div className={styles.testimonialsHeader}>
            <h2>Don't just take our word for it</h2>
            <p className="text-large">See what our customers are saying about us.</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <h3>"You made it so simple"</h3>
                  <p>My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes and click save.</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <img
                      src="/Corey.svg"
                      alt="Corey Valdez"
                      className={styles.avatar}
                    />
                  </div>
                  <div>
                    <h4>Corey Valdez</h4>
                    <p>Founder at Zenix</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <h3>"Simply the best"</h3>
                  <p>Better than all the rest. I'd recommend this product to beginners and advanced users who want a clean interface.</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <img
                      src="/Ian.svg"
                      alt="Ian Klein"
                      className={styles.avatar}
                    />
                  </div>
                  <div>
                    <h4>Ian Klein</h4>
                    <p>Digital Marketer</p>
                  </div>
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
            <h2>Pricing & Plans</h2>
            <p className="text-large">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card card-dark">
              <div className={styles.pricingCard}>
                <h4 className={styles.planName}>STARTER</h4>
                <div className={styles.price}>$19</div>
                <p className={styles.planDescription}>Per month</p>
                <ul className={styles.planFeatures}>
                  <li>Up to 5 projects</li>
                  <li>10GB storage</li>
                  <li>Email support</li>
                  <li>Basic analytics</li>
                </ul>
                <button className={styles.planButton}>Get started</button>
              </div>
            </div>
            
            <div className="card card-dark">
              <div className={`${styles.pricingCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <h4 className={styles.planName}>PROFESSIONAL</h4>
                <div className={styles.price}>$49</div>
                <p className={styles.planDescription}>Per month</p>
                <ul className={styles.planFeatures}>
                  <li>Unlimited projects</li>
                  <li>100GB storage</li>
                  <li>Priority support</li>
                  <li>Advanced analytics</li>
                  <li>Team collaboration</li>
                </ul>
                <button className={styles.planButton}>Get started</button>
              </div>
            </div>
            
            <div className="card card-dark">
              <div className={styles.pricingCard}>
                <h4 className={styles.planName}>ENTERPRISE</h4>
                <div className={styles.price}>$99</div>
                <p className={styles.planDescription}>Per month</p>
                <ul className={styles.planFeatures}>
                  <li>Everything in Pro</li>
                  <li>Unlimited storage</li>
                  <li>24/7 phone support</li>
                  <li>Custom integrations</li>
                  <li>Advanced security</li>
                </ul>
                <button className={styles.planButton}>Contact sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}