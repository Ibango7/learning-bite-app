import React from 'react';
import styles from './side-bar-style.module.css';
import home from '../../assets/home.png';
import book_suggestion from '../../assets/book_suggestion.png';
import badge from '../../assets/badge.png';
import settings from '../../assets/settings.png';
import logout from '../../assets/logout.png'
import logo from '../../assets/logo_learningBite.png';
import {Link } from 'react-router-dom';
import { useAuthState } from '../../providers/authProvider';

/*
logOutUser
*/


const SideBar = (props) =>{
    const icons = [home, book_suggestion, badge,settings];
    const {logOutUser} = useAuthState(); 

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
                {index === icons.length - 1 &&  // If it's the logout icon
                    <div>
                         <img className={styles.sidebarIcons} src={logout} alt="icon"/> 
                        <span className={styles.sideBarText} onClick={logOutUser}>
                            Logout
                        </span>
                    </div>
                   
                }

                </li>
            
            </>
        )
    });

        // Check if the items array is not empty
        /*if (items.length > 0) {
            // Add onClick event handler to the last item
            items[items.length - 1] = React.cloneElement(items[items.length - 1], {
                onClick: logOutUser
            });
        }*/

    
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