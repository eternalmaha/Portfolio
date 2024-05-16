import React from 'react'; 
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, Maha here. </h1>
                <p className={styles.description}> Full Stuck MERN Developer with 3+ years experience. Reach out if you'd like to learn more. </p>
                <a className = {styles.contactBtn} href = 'malito:myemail@gmail.com'> Contact Me </a>
            </div>
            <img className = {styles.Img} src = {getImageUrl("hero/heroImage.png")} alt = "Hero image of me"/> 
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div> 
        </section>
    )
}