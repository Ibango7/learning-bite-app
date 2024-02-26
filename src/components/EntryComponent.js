import React from 'react'
import logo from '../assets/logo_learningBite.png';
import styles from '../styles/navbar-style.module.css'
import Categories from './Categories';
import Info from './Info';


// import styles from './search-style.module.css'
const Entry = () => { 
    const categories = ['Parenting', 'Economics', 'Science', 
    'Entrepreneurship', 'Psychology', 'Exercise', 'Money&Investment', 'Health', 'Marriage'];

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarlogo}>
                <img src={logo} alt="Logo" />
                </div>
                <div className={styles.navbarlinks}>
                <div className={styles.navbarlinksright}>
                    <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Categories</button>
                    <div className={styles.dropdowncontent}>
                        <a href="/login">Category 1</a>
                        <a href="/login">Category 2</a>
                        <a href="/login">Category 3</a>
                    </div>
                    </div>
                    <a href="/login">Login</a>
                </div>
                </div>
            </nav>
            <Categories categories={categories}/>
            <Info/>
        </>
    
    );
}

export default Entry;