import React from 'react'
// import styles from './search-style.module.css'

const Search = () =>{

    return (
        <div className="{styles.container}" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <input style={{
                width: "518px",
                height: "65px",
                border: "2px solid #ccc ",
                borderRadius: "50px", 
                padding: "10px",
            }} className="{styles.searchbar}" type="text" placeholder='Title, book author'/>
        </div>
    );
}

export default Search;