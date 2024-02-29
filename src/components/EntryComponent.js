import React, {useState} from 'react'
import logo from '../assets/logo_learningBite.png';
import styles from '../styles/navbar-style.module.css'
import Categories from './Categories';
import Info from './Info';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';


// import styles from './search-style.module.css'
const Entry = () => { 
    const [isModalOpen, setIsModalOPen] = useState({login:false, register: false});
    const categories = ['Parenting', 'Economics', 'Science', 
    'Entrepreneurship', 'Psychology', 'Exercise', 'Money&Investment', 'Health', 'Marriage'];

    const openModal = (x) => {
        setIsModalOPen((prev) => {
            if(x === "login") {
                return {...prev, login:true};
            }

            if(x === "register") {
                return {...prev, register :true};
            }
        });
    } 

    const closeModal = (x) =>{
        // setIsModalOPen(false);
        setIsModalOPen((prev) => {
            if(x === "login") {
                return {...prev, login: false};
            }

            if(x === "register") {
                return {...prev, register: false};
            }
        });
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
                    {/* <span className={styles.dropbtn}>Categories</span>
                    <div className={styles.dropdowncontent}>
                        <a href="/login">Category 1</a>
                        <a href="/login">Category 2</a>
                        <a href="/login">Category 3</a>
                    </div> */}
                    </div>
                    <span onClick={()=>openModal("register")} style={{paddingLeft:"20px", cursor:"pointer"}}>Register</span>
                    <span onClick={()=>openModal("login")} style={{paddingLeft:"20px", cursor:"pointer"}}>Login</span>
                    <LoginModal isOpen={isModalOpen.login} onClose={()=>closeModal("login")}/>
                    <RegisterModal isOpen={isModalOpen.register} onClose={()=>closeModal("register")}/>
                </div>
                </div>
            </nav>
            <Categories categories={categories}/>
            <Info/>
        </>
    
    );
}

export default Entry;