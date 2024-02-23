import React from 'react';
import styles from './side-bar-style.module.css';

const SideBar = (props) =>{
    const items = props.items.map((item, index) =>{
        return <li key={index}> {item} </li>
    });
    return (
        <div className={styles.sidebar}>
           {items}
        </div>
    );
}

export default SideBar;