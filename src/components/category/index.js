import React from 'react';
import styles from './category-style.module.css';
import parenting from '../../assets/family.png';
import economics from '../../assets/economic.png';
import science from '../../assets/science.png';
import entrepreneurship from '../../assets/entrepreneurship.png';
import  pyschology from '../../assets/brain.png';
import exercise from '../../assets/workout.png';
import money from '../../assets/profit.png';
import  health from '../../assets/healthcare.png';
import  marriage from '../../assets/wedding-couple.png';
import MostPopular from '../mostPopular';

const Categories = (props) => {
    const icons = [parenting, economics, science, entrepreneurship, pyschology, exercise, money, health, marriage];
    
    return (
        <div className={styles.categories}>
            <h1 className={styles.heading}>What are you interested in?</h1>
            <div className={styles.categoryList}>
                {props.categories.map((category, index) => (
                    <div className={styles.categoryItem} key={index}>
                        <img className={styles.icon} src={icons[index]} alt="icon" />
                        <span>{category}</span>
                    </div>
                ))}
            </div>
            <MostPopular />
        </div>
    );
}

export default Categories;
