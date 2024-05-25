import React from 'react'; 
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, Maha here. </h1>
                <p className={styles.description}> I'm a Full Stack, React Developer. </p>
                <a className = {styles.contactBtn} href='mailto:maha.ahmed4peace@gmail.com'> Contact Me </a>
            </div> 
            <img className = {styles.Img} src = {getImageUrl("hero/magimaha.png")} alt = "Hero image of me"/> 
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div> 
        </section>
    )
}