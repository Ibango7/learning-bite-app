import React from 'react'
import styles from '../styles/book-list-style.module.css';
import placeholder from '../assets/placeholder.png';

const MostPopular = (props) =>{
    const counter = [1,2,3,];
    
    return (
        <>
        {/* This data will be populated dynamically */}
        
            <div className={styles.booklist_recommend} style={{position:"relative"}}>
                {/* <div className={`${styles.scrollbtn} ${styles.scrollleft}`}>&lt;</div>
                <div className={`${styles.scrollbtn} ${styles.scrollright}`}>&gt;</div> */}

                {counter.map((item, index) => (
                    <div className={styles.book_recomend} key={index}>
                        <div className={styles.book_image}>
                            <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                        </div>
                        <div className={styles.booktitle}>Book Title 1</div>
                        <div className={styles.bookauthor}>Author Name 1</div>
                        <div className={styles.readtime}>Read Time: 8 min</div>
                    </div>
                ))}
            </div>

            
        </>
        
    );
}

export default MostPopular;