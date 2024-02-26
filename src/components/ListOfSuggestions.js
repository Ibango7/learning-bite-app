import React from 'react'
import styles from '../styles/book-list-style.module.css';
import placeholder from '../assets/placeholder.png';

const ListOfSuggestions = () =>{

    return (
        <>
        {/* This data will be populated dynamically */}
            <div className={styles.booklist}>
                <div className={`${styles.scrollbtn} ${styles.scrollleft}`}>&lt;</div>
                <div className={`${styles.scrollbtn} ${styles.scrollright}`}>&gt;</div>
                
                <div className={styles.book}>
                    <div className={styles.book_image}>
                        <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                    </div>
                    <div className={styles.booktitle}>Book Title 1</div>
                    <div className={styles.bookauthor}>Author Name 1</div>
                    <div className={styles.readtime}>Read Time: 8 min</div>
                </div>

            </div>
        </>
        
    );
}

export default ListOfSuggestions;