import React from 'react';
import book from  '../../assets/book.png';
import read_time from '../../assets/book_time.png';
import suggestion from '../../assets/suggestion.png';
import styles from './info-style.module.css';

const Info = () => {
    return (
        <div className={styles.container}>
            <h1>Consume bites of information in <br /> a short period of time</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <img className={styles.imageFormat} src={book} alt="icon" />
                    <br></br>
                    <strong>Read key ideas</strong>
                    <p>Get valuable bites of information from your interests</p>
                </div>
                <div className={styles.content}>
                    <img className={styles.imageFormat} src={read_time} alt="icon" />
                    <br></br>
                    <strong>Read-time</strong>
                    <p>Know ahead of time how long it will take you to read a bite of information.</p>
                </div>
                <div className={styles.content}>
                    <img className={styles.imageFormat} src={suggestion} alt="icon" />
                    <br></br>
                    <strong>Suggestions</strong>
                    <p>Get a curated list of bites based on your interests</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
