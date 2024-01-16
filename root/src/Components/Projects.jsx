import React from "react";
import Project_DataBase from "./Project_DataBase";

function Projects() {
    return (
        <section class="Projects" id="projects">
            <h1 class="project-title">My Projects</h1>
            <div class="proj-wrap center">
                {Project_DataBase.map((project, index) => {
                    return(
                        <div key={index} class="Project">
                            <div class="text">
                                <h2 class="name">{project.Project_Name}</h2>
                                <h4 class="skills">{project.skills}</h4>
                            </div>
                            <img src={project.Img_src} class="img"/>
                            <a
                                href={project.Github_link}
                                class="github-link"
                            >GitHub</a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;