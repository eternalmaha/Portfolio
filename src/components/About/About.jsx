import React from "react";
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

export const About = () => {
    return (
        <>
            <section className={styles.container} id='about'> 
                <h2 className={styles.title}> About </h2>
                <div className={styles.content}> 
                    <img className = {styles.aboutImg} src = {getImageUrl("about/about.png")} alt = "About image"/> 
                    <ul className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/cursorIcon.png")} alt = "front-end dev icon"/> 
                                <div className={styles.aboutItemText}>
                                    <p>
                                    I had a childhood fascination for how things work, turning a pyschology passion into a cherised profession in adult psycho - social rehabilitation education. A continued fondness for learning and teaching propelled me into the world of STEM secondary education during a historical era.
                                    </p> 
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/serverIcon.png")} alt = "back-end dev icon"/>   
                                <div className={styles.aboutItemText}>
                                    <p>
                                    The emerging impact of web technologies on the learning experiences of my students sparked a personal curiosity into our intimate relationship with digital educational technology. 
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/uiIcon.png")} alt = "technical writing icon"/> 
                                <div className={styles.aboutItemText} >
                    
                                    <p>
                                    I'm not just a web developer though — I'm a digital storyteller who creates vibrant, engaging web experiences. I thrive on collaboration and love working with local educational and civic technolgies to reimagine learning and community. Let's learn to learn together!
                                    </p>
                                </div>
                            </li>
                    </ul>
                </div>
            </section>
        </>
    )
}