import React from 'react';
import styles from './side-bar-style.module.css';
import home from '../../assets/home.png';
import book_suggestion from '../../assets/book_suggestion.png';
import badge from '../../assets/badge.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png'
import logo from '../../assets/logo_learningBite.png';
import {Link } from 'react-router-dom';




const SideBar = (props) =>{
    const icons = [home, book_suggestion, badge,settings,logout];

    const items = props.items.map((item, index) =>{
            // format link paths 
            const formattedName = item.toLowerCase().replace(/\s+/g, '');
        return (
            <>
                <li key={index}>
                <Link className={styles.linkStyle} to={`/${formattedName}`}>
                        <img className={styles.sidebarIcons} src={icons[index]} alt="icon"/> 
                        <span className={styles.sideBarText}>
                            {item}     
                        </span>
                </Link>
                </li>
            
            </>
        )
    });


    
    return (
            <div className={styles.sidebar}>
                <div className={styles.sideBarLogo}>
                <img src={logo}  alt='logo'/>
                </div>
                    {items}
            </div>
    );
}

export default SideBar;