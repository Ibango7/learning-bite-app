import React from 'react'
import styles from './main-style.module.css';
import Search from './Search';

const Suggestions = () =>{
    return (
        <div className={styles.content}>
             <Search/>
             <br/><br/>
            <h1>Suggested Bites for you </h1>
        </div>
    );
}

export default Suggestions;