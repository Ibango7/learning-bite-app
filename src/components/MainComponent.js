import React from 'react'
import styles from './main-style.module.css';
import Search from './Search';
import ListOfReads from './ListOfReads';



const MainComponent = () =>{

    return (
        <div className={styles.content}>
            <Search/>
            <br/><br/>
            <div style = {{textAlign: "center"}}>
                <h1>My read bites</h1>
                <ListOfReads/>
            </div>
        </div>
    );
}

export default MainComponent;