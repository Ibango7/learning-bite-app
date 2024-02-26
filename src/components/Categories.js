import React from 'react'
import styles from '../styles/category-style.module.css';
import parenting from '../assets/family.png';
import economics from '../assets/economic.png';
import science from '../assets/science.png';
import entrepreneurship from '../assets/entrepreneurship.png';
import  pyschology from '../assets/brain.png';
import exercise from '../assets/workout.png';
import money from '../assets/profit.png';
import  health from '../assets/healthcare.png';
import  marriage from '../assets/wedding-couple.png';
import MostPopular from './MostPopular';



const Categories = (props) => {
    const icons = [parenting, economics, science, entrepreneurship, pyschology, exercise, money, health, marriage];
    return (
        <>
            <div style={{textAlign:"right", marginTop:"13%", marginRight: "8%" }}>
            <h2>What are you interested in?</h2>
                <div className={styles.categorylist}>
                    {props.categories.map((category, index) => (
                    <div className={styles.categoryitem} key={index}>
                        <img className={styles.icons} src={icons[index]} alt="icons"/> <span style={{background:"2px"}}>{category}</span>
                    </div>
                    ))}
                </div>
            </div>
            {/* <MostPopular/> */}
        </>
    );
}

export default Categories;