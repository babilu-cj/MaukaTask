import React from "react"
import leafImage from "../images/Group134.png"

function Subscribe() {
    return (<section className="subscribe">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
        <form className="subscription">
            <input type="email" placeholder="Enter your email address"></input>
            <button type="submit">Subscribe</button>
        </form>
        <img src={leafImage} alt="leaf logo"/>
    </section>
    )
}

export default Subscribe;