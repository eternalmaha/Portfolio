import React from "react";
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

export const About = () => {
    return (
        <>
            <section>
                <h1 className={styles.title}> About </h1>
                <img src = {getImageUrl()} alt = "About image"/> 
            </section>
            <section>
                <section>
                    <img src = {getImageUrl()} alt = "front-end dev icon"/> 
                    <h1 className={styles.title}> Front- End Developer </h1>
                    <p>
                        Passionate about building and designing responsive and optimized websites tailored to the needs of purpose driven businesses. 
                    </p>
                </section>
                <section>
                    <img src = {getImageUrl()} alt = "back-end dev icon"/> 
                    <h1 className={styles.title} > Back - End Developer </h1>
                    <p>
                        Committed to delivering fast and optimized API's, etc. 
                    </p>
                </section>
                <section>
                    <img src = {getImageUrl()} alt = "technical writing icon"/> 
                    <h1 className={styles.title} > Technical Writer </h1>
                    <p>
                        Digestable technical content written for all levels based on years of learning the game. 
                    </p>
                </section>
            </section>
        
        </>
    )
}