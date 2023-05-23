import React from "react";
import styles from '../styles/newArticle.module.css';

export default function NewArticle(props) {
    return (
        <div className={styles.newArticleContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.newArticlesLauch}>LATEST LAUNCH</p>
                <p className={styles.newArticlesTitle}>{props.title}</p>
            </div>
            <img className={styles.soundbar} src="/images/soundbar.png" alt="DIONE SOUNDBAR" />
            <button className='discover'>DISCOVER</button>
        </div>
    )
}

