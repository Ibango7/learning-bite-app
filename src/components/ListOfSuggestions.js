import React from 'react'
import styles from '../styles/book-list-style.module.css';
import placeholder from '../assets/placeholder.png';

const ListOfSuggestions = () =>{

    return (
        <>
        {/* This data will be populated dynamically */}
            <div className={styles.bookcontainer}>

                <div className={styles.bookimage}>
                    <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                </div>
                <div className={styles.bookdetails}>
                    <div className={styles.booktitle}>Book Title</div>
                    <div className={styles.bookauthor}>Author Name</div>
                    <div className={styles.readtime}>Read Time: 10 min</div>
                </div>


            </div>

            <div className={styles.bookcontainer}>
                <div className={styles.bookimage}>
                    <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                </div>
                <div className={styles.bookdetails}>
                    <div className={styles.booktitle}>Book Title</div>
                    <div className={styles.bookauthor}>Author Name</div>
                    <div className={styles.readtime}>Read Time: 10 min</div>
                </div>

            </div>

            <div className={styles.bookcontainer}>
                <div className={styles.bookimage}>
                    <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                </div>
                <div className={styles.bookdetails}>
                    <div className={styles.booktitle}>Book Title</div>
                    <div className={styles.bookauthor}>Author Name</div>
                    <div className={styles.readtime}>Read Time: 10 min</div>
                </div>

            </div>
            <div className={styles.bookcontainer}>
                <div className={styles.bookimage}>
                    <img src={placeholder} style={{height:"145px"}} alt="Book Cover"/>
                </div>
                <div className={styles.bookdetails}>
                    <div className={styles.booktitle}>Book Title</div>
                    <div className={styles.bookauthor}>Author Name</div>
                    <div className={styles.readtime}>Read Time: 10 min</div>
                </div>

            </div>
        
        </>
        
    );
}

export default ListOfSuggestions;