import React from 'react'
import styles from './main-style.module.css';
import Search from './Search';

const MainComponent = () =>{

    return (
        <div className={styles.content}>
            <Search/>
            <br/><br/><br/><br/><br/><br/>
            <h1>Welcome to learning bite App</h1>
        </div>
    );
}

export default MainComponent;