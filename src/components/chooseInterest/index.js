import React, {useState} from 'react'
import logo from '../assets/logo_learningBite.png';
import styles from '../styles/navbar-style.module.css'
import Categories from '../category';
import Info from '../info';
import LoginModal from '../login';
import RegisterModal from '../register';


// import styles from './search-style.module.css'
const chooseInterest = () => { 
    const categories = ['Parenting', 'Economics', 'Science', 
    'Entrepreneurship', 'Psychology', 'Exercise', 'Money&Investment', 'Health', 'Marriage'];


    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarlogo}>
                <img src={logo} alt="Logo" />
                </div>
            </nav>
            <Categories categories={categories}/>
            <Info/>
        </>
    
    );
}

export default chooseInterest;