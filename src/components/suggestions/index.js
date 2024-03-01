import React from 'react'
import styles from './main-style.module.css';
import Search from '../search';
import ListOfSuggestions from '../listOfSuggestions';

const Suggestions = () =>{
    return (
        <div className={styles.content}>
             <Search/>
             <br/><br/><br/>
            <h1>Suggested Bites for you </h1>
            <br/>
            <ListOfSuggestions/>
        </div>
    );
}

export default Suggestions;