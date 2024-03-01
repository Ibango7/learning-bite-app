import React, { useState } from 'react';
import logo from '../../assets/logo_learningBite.png';
import styles from './navbar-style.module.css';
import Categories from '../category';
import Info from '../info';
import LoginModal from '../login';
import RegisterModal from '../register';

const Entry = () => {
    const [isModalOpen, setIsModalOpen] = useState({ login: false, register: false });
    const categories = ['Parenting', 'Economics', 'Science', 'Entrepreneurship', 'Psychology', 'Exercise', 'Money&Investment', 'Health', 'Marriage'];

    const openModal = (x) => {
        setIsModalOpen((prev) => {
            if (x === "login") {
                return { ...prev, login: true };
            }

            if (x === "register") {
                return { ...prev, register: true };
            }
        });
    }

    const closeModal = (x) => {
        setIsModalOpen((prev) => {
            if (x === "login") {
                return { ...prev, login: false };
            }

            if (x === "register") {
                return { ...prev, register: false };
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
                        </div>
                        <span onClick={() => openModal("register")} style={{ paddingLeft: "20px", cursor: "pointer" }}>Register</span>
                        <span onClick={() => openModal("login")} style={{ paddingLeft: "20px", cursor: "pointer" }}>Login</span>
                        <LoginModal isOpen={isModalOpen.login} onClose={() => closeModal("login")} />
                        <RegisterModal isOpen={isModalOpen.register} onClose={() => closeModal("register")} />
                    </div>
                </div>
            </nav>
            <div className={styles.pageContent}>
                <div className={styles.leftContent}>
                    <Info />
                </div>
                <div className={styles.rightContent}>
                    <Categories categories={categories} />
                </div>
            </div>
        </>
    );
}

export default Entry;
