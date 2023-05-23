import React from "react";
import styles from '../styles/Footer.module.css';

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <a href="#">SUPPORT</a>
            <a href="#">STORES</a>
        </div>
    
    )
}