import React from 'react';
import styles from '../styles/ContactPage.module.css';
import Navbar from './Navbar';

export default function ContactPage() {
  return (
    <div className={styles.fullHeight}>
      <Navbar/>
      <div>
        
        <div className={styles.row}>
          <div className={styles.column}>
            <h2>Customer Care</h2>
            <p>For assistance with existing orders or inquiries:</p>
            <p>Call: <a href="tel:+1234567890">123-456-7890</a></p>
          </div>
          <div className={styles.column}>
            <h2>Sales</h2>
            <p>For inquiries related to new orders or services:</p>
            <p>Call: <a href="tel:+9876543210">987-654-3210</a></p>
          </div>
          <div className={styles.column}>
            <h2>Sales</h2>
            <p>For inquiries related to new orders or services:</p>
            <p>Call: <a href="tel:+9876543210">987-654-3210</a></p>
          </div>
        </div>

        <div className={styles.colun}>
          <div className={styles.box}>
            <a className={styles.button} href="#popup1">Ask a Question</a>
          </div>
          <div id="popup1" className={styles.overlay}>
            <div className={styles.popup}>
              <h2>Submit a question</h2>
              <a className={styles.close} href="#">&times;</a>
              <div className="content">
                Thank you for reaching out! How can we assist you?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.row1}>
        <div className={styles.column}>
          <h2>FAQ</h2>
          <div className={styles.faq}>
            <details>
              <summary>Question 1?</summary>
              <p>Answer to question 1.</p>
            </details>
            <details>
              <summary>Question 2?</summary>
              <p>Answer to question 2.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
