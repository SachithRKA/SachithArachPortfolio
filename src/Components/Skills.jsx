import React from "react";
import Skill_List from "./Skill_List";
function Skills() {
    return (
        <section class="Skills" id="skills">
            <div class="skills-wrap center">
                <h1 class="title">About Me</h1>
                {Skill_List.map((list, index) => {
                    return  (
                        <div key={index} class="list">
                            <div class="skill-title">
                                <span>{list.title}</span>
                            </div>
                            <div class="skills">
                                {list.skill.map((skill, index) => {
                                    return <span key={index} class="skill">{skill}</span>
                                })}
                            </div>
                        </div> 
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;