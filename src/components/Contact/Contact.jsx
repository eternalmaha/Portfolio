import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <>
            <footer id="contact" className={styles.container}>
                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> 
                        <a href="malito:maha.ahmed4peace@gmail.com">maha.ahmed4peace@gmail.com </a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" /> 
                        <a href="https://www.linkedin.com/in/maha-ahmed3/">linkedin.com/in/maha-ahmed3/</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" /> 
                        <a href="https://www.github.com/maha4peace"> github.com/maha4peace </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}