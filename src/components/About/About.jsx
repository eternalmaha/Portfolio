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
                                    <h3> Front End Developer </h3>
                                    <p>
                                        Passionate about building and designing responsive and optimized websites tailored to the needs of purpose driven businesses. 
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/serverIcon.png")} alt = "back-end dev icon"/>   
                                <div className={styles.aboutItemText}>
                                    <h3> Back End Developer </h3>
                                    <p>
                                        Committed to delivering fast and optimized backend systems and API's. 
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/uiIcon.png")} alt = "technical writing icon"/> 
                                <div className={styles.aboutItemText} >
                                    <h3> Technical Writer </h3>
                                    <p>
                                        Digestable technical content written for all levels based on years of learning the game. 
                                    </p>
                                </div>
                            </li>
                    </ul>
                </div>
            </section>
        </>
    )
}