import React from "react";
import styles from '../styles/Navbar.module.css'
import { Link } from "react-router-dom";

//navigation panel
function Navbar(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                
                <h1 className="slogan">THE LEGAL SAVANNAH | Sheria Mkononi</h1>
                <ul className={styles.navItems}>
                    <button className={styles.btn}>Advocates</button>
                    <button className={styles.btn}><Link to="/create">About Us</Link></button>
                    <button className={styles.btn}><Link to="/contactpage">Contact Us</Link></button>
                    <button className={styles.button} ><span><Link to="/username">Login</Link></span></button>
                </ul>
                
            </nav>
        </header>

    );
}
export default Navbar;