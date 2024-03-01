import React from 'react';
import styles from './book-list-style.module.css';
import placeholder from '../../assets/placeholder.png';

const MostPopular = (props) => {
    const counter = [1, 2, 3];

    return (
        <div className={styles.mostPopular}>
            <h3 className={styles.heading}> Some popular reads for you</h3>
            <div className={styles.bookList}>
                {counter.map((item, index) => (
                    <div className={styles.bookItem} key={index}>
                        <div className={styles.bookImage}>
                            <img src={placeholder} alt="Book Cover" />
                        </div>
                        <div className={styles.bookDetails}>
                            <div className={styles.bookTitle}>Book Title 1</div>
                            <div className={styles.bookAuthor}>Author Name 1</div>
                            <div className={styles.readTime}>Read Time: 8 min</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostPopular;
