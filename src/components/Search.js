import React from 'react'
import styles from './search-style.module.css'

const Search = () =>{

    return (
        <div className={styles.searchbar}>
            <input type="text" placeholder='Title, book author'/>
        </div>
    );
}

export default Search;