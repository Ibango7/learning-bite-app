import React from 'react'
import styles from './main-style.module.css';
import Search from '../search';
import ListOfReads from '../myReads';



const MainComponent = () =>{

    return (
        <div className={styles.content}>
            <Search/>
            <br/><br/>
            <h1>My read bites</h1>
            <ListOfReads/>
            
        </div>
    );
}

export default MainComponent;