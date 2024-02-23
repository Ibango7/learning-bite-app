import React from 'react';
import styles from './side-bar-style.module.css';
import home from '../assets/home.png';
import book_suggestion from '../assets/book_suggestion.png';
import badge from '../assets/badge.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png'
import logo from '../assets/logo_learningBite.png';



const SideBar = (props) =>{
    const icons = [home, book_suggestion, badge,settings,logout]

    const items = props.items.map((item, index) =>{
        return <li key={index}><img className={styles.sidebarIcons} src={icons[index]} alt="icon"/> <span className={styles.sideBarText}>{item} </span></li>
    });
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.sideBarLogo}>
                <img src={logo}  alt='logo'/>
                </div>
                {items}
            </div>
        </>
       
    );
}

export default SideBar;