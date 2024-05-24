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
                                        The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. I'm not just a web developer — I'm a digital storyteller, crafting websites that blend creativity with functionality. With a passion for design and a knack for coding, I create vibrant, engaging web experiences that bring your brand to life. 
                                    </p> 
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/serverIcon.png")} alt = "back-end dev icon"/>   
                                <div className={styles.aboutItemText}>
                
                                    <p>
                                    My journey into web development started with a childhood fascination for how things work, and it blossomed into a career where I get to turn ideas into interactive, beautiful realities. Whether it’s a quirky portfolio site, a dynamic e-commerce platform, or a sleek business page, I believe in infusing each project with a bit of whimsy and a lot of heart.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img className={styles.aboutImg} src = {getImageUrl("about/uiIcon.png")} alt = "technical writing icon"/> 
                                <div className={styles.aboutItemText} >
                    
                                    <p>
                                    When I’m not behind the screen, you’ll find me exploring local coffee shops, nature, sketching out new ideas, or playing with my adorable (and occasionally mischievous) cat, Malik. I thrive on collaboration and love working with local small businesses to help them shine online.
                                    </p>
                                </div>
                            </li>
                    </ul>
                </div>
            </section>
        </>
    )
}