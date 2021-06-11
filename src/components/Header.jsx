import React from "react"
import flower from "../images/Group195.png"
import design from "../images/Group 228.png"

function Header() {
    return (<section className="header">
        <header className="navbar">
            <div className="navbar-brand">
                <img src={design} alt="Design image" />
                <h2>organic</h2>
            </div>
            <div className="navbar-links">
                <a>Home</a>
                <a>Products</a>
                <a>Blog</a>
                <a>About Us</a>
                <a className="navbar-link-contact">Contact</a>
            </div>
        </header>
        <div className="heading">
            <h3>Healthy life with</h3>
            <h1>Nature Organic</h1>
            <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
            <button>Explore Now</button>
        </div>
        <img className="flower" src={flower} alt="Flower image"/>
        <img className="design" src={design} alt="Design image"/>
    </section>)
}

export default Header;