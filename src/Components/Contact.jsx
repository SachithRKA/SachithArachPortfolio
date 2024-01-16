import React from "react";

function Contact() {
    return (
        <section class="Contact" id="contact">
            <h1 class="title">Contact Me</h1>
            <form class="contact-form center">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Submit" class="contact-button" />
            </form>
        </section>
    );
}

export default Contact;