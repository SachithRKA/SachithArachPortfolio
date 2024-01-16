import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

function App ()
{
    return (
        <div>
            <Navbar/>
            <Header/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;