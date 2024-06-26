import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <>
            <footer id="contact" className={styles.container}>
                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Lets connect!</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> 
                        <a href="mailto:maha.ahmed4peace@gmail.com">Email </a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" /> 
                        <a href="https://www.linkedin.com/in/maha-ahmed3/">Linkedin</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" /> 
                        <a href="https://www.github.com/eternalmaha"> GitHub </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}