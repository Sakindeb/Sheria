import React from 'react';
import styles from '../styles/Content.module.css'
import { Link } from 'react-router-dom';
import business from '../assets/business.jpg'
import personal from '../assets/will.jpg'
import lawyer from '../assets/lawyer.jpg'
// import mumo from '../assets/mumo.jpeg'
// import sakin from '../assets/sakin.jpeg'
const Content = () => {
  return (
    <div className={styles.fullHeight}>
    <div className={styles.content}>
      <section className={styles.introSection}>
        <div className={styles.introText}>
          <h1>Your Legal Partner in your Pocket</h1>
          <p>Whether you're a business owner looking to protect your brand, an individual planning for the future, or someone in need of immediate legal help, our services have you covered. </p>
          
        </div>
        <div>
        <button className={styles.getStartedButton}><Link to= '/username'>Getting Started</Link></button>
        </div>
        
      </section>

      <section className={styles.row}>
        <div className={styles.column}>
          <img src={business} alt="Access to Justice" />
          <h3>Business Solutions</h3>
          <p>Whether you're starting a new venture or expanding an existing one, our business services are tailored to meet your specific needs.</p>
        </div>
        <div className={styles.column}>
          <img src={personal}alt="Affordable Advocate" />
          <h3>Personal Legal Services</h3>
          <p>Planning for the future is crucial, and our personal legal services cover a broad spectrum of needs providing expert advice and assistance in creating wills and trusts, helping you secure your family's financial well-being and manage your estate efficiently. </p>
        </div>
        <div className={styles.column}>
          <img src={lawyer} alt="Demystifying Legal Processes" />
          <h3>Legal Help and Emergency Services</h3>
          <p>Legal challenges can arise unexpectedly, and having access to reliable resources is essential. Our platform offers you the convenience of accessing legal forms that are commonly required, saving you time and effort. </p>
        </div>
      </section>
{/* 
      <section className={styles.teamSection}>
        <div className={styles.team}>
          <img src={mumo} alt="Team Member 1" />
          <h4>John Doe</h4>
          <p>Lead Attorney</p>
        </div>
        <div className={styles.team}>
          <img src={sakin} alt="Team Member 2" />
          <h4>Jane Smith</h4>
          <p>Legal Consultant</p>
        </div>
        
      </section> */}

      <section className={styles.newsletterSection}>
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest news and legal insights.</p>
          <input type="email" placeholder="Enter your email" />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </section>

      <footer className={styles.footer}>
      <p>&copy; 2023 The Legal Savannah. All rights reserved.</p>
        <p>Legal Savannah offers access to independent advocates and user-friendly self-service resources. We operate independently and do not offer legal counsel.
        </p>
        
      </footer>
    </div>
    </div>
  );
};

export default Content;
