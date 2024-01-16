import React from "react";
import Container from 'react-bootstrap/Container';

function Header ()
{
    return (
        <section class="header center" id="header">
            <h1 class="job-title">
                Web Developer
            </h1>
            <img src="./img/face_image.png" alt="John Smith" class="portfolio-img" />
            <h3 class="portfolio-name">Sachith Arach</h3>
            <a href="#section-3" class="projects">Projects</a>
        </section>
    );
}

export default Header;