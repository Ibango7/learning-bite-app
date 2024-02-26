import React, {useState} from 'react'
import logo from '../assets/logo_learningBite.png';
import styles from '../styles/navbar-style.module.css'
import Categories from './Categories';
import Info from './Info';
import LoginModal from './LoginModal';


// import styles from './search-style.module.css'
const Entry = () => { 
    const [isModalOpen, setIsModalOPen] = useState(false);
    const categories = ['Parenting', 'Economics', 'Science', 
    'Entrepreneurship', 'Psychology', 'Exercise', 'Money&Investment', 'Health', 'Marriage'];

    const openModal = () => {
        setIsModalOPen(true);
    } 

    const closeModal = () =>{
        setIsModalOPen(false);
    }


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
                    <a onClick={openModal} href="/login">Login</a>
                    <LoginModal isOpen={isModalOpen} onClose={closeModal}/>
                </div>
                </div>
            </nav>
            <Categories categories={categories}/>
            <Info/>
        </>
    
    );
}

export default Entry;