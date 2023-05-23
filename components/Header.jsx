import React from "react";
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.topHeaderContainer}>
                <FontAwesomeIcon icon={faBars} className={styles.fontIcon} />
                <h1 className={styles.title}>MUSIC STORE</h1>
                <div className={styles.iconsContainer}>
                    <FontAwesomeIcon icon={faUser} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faLocationDot} className={styles.fontIcon} />
                    <FontAwesomeIcon icon={faBagShopping} className={styles.fontIcon} />
                </div>
            </div>

            <div className={styles.bottomHeaderContainer}>
                <div className={styles.nameProductsContainer}>
                    <span>PHANTOM</span>
                    <span className={styles.productTitle}>IMPLOSIVE SOUND</span>
                </div>
                <div>
                    <button className={styles.homeDiscover}>DISCOVER</button>
                    <button className={styles.homeBuy}>BUY</button>
                </div>
            </div>
        </div>
    )
}