import React from 'react'
import styles from './main-style.module.css';
import book from '../assets/book.png';
import read_time from '../assets/book_time.png';
import suggestion from '../assets/suggestion.png';
import styles2 from '../styles/info-style.module.css';

const Info = () =>{
    return (
        <div className={`${styles2.container}`}>
            <h1 style={{textAlign:'left', paddingLeft:"50px"}}>Consume bites of information in <br></br> a short period of time</h1>
            <div className={styles2.contentWrapper}>
                <div className={styles2.content}>
                        <img className={styles2.imageFormat} src={book} alt="icon"/>
                        <br></br>
                        <strong>
                            Read key ideas
                        </strong>
                        <p style={{width:"150px"}}>
                            Get valuable  bites of infomation from your interests
                        </p>
                </div>
                <div className={styles2.content}>
                    <img className={styles2.imageFormat}  src={read_time} alt="icon"/>
                    <br></br>
                        <strong>
                            Read-time
                        </strong>
                        <p style={{width:"150px"}}>
                            Know ahead of time how long it will take you to read a bite of information.
                        </p>  
                </div>
                <div className={styles2.content}>
                    <img  className={styles2.imageFormat}  src={suggestion} alt="icon"/>
                    <br></br>
                        <strong>
                            Suggestions
                        </strong>
                        <p style={{width:"150px"}}>
                            Get a curated list of bites based on your interests
                        </p>  
                    
                </div>
           </div>
        </div>
    );
}

export default Info;