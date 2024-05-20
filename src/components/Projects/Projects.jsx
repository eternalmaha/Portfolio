import React from 'react'; 
import styles from "./Projects.module.css";
import projects from "../../data/projects.json"; 
import { getImageUrl } from '../../utils';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    return (
        <section>
            <h2> Projects </h2>
            <div>
                { projects.map((project, id) => {
                    return(
                        <ProjectCard key={id}/> 
                    )
                  })}
            </div>
        </section>
    )
}