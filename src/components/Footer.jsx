import React from "react"
import logo from "../images/Group225.png"

function Footer() {
    return (<section className="footer">
        <div className="footer-left">
            <img src={logo} alt="logo" />
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor </h6>
            <span></span>
            <p>© Copyright 2020 Nature</p>
        </div>
        <div className="footer-mid">
            <h2>Information</h2>
            <span></span>
            <div className="footer-mid-contents">
                <p>About Us</p>
                <p>Products</p>
                <p>Contact Us</p>
                <p>Terms of Service</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="footer-right">
            <h2>Follow Us</h2>
            <span></span>
            <div className="links">
                <a className="link-facebook" href="/"></a>
                <a className="link-linkedin" href="/"></a>
                <a className="link-twitter" href="/"></a>
                <a className="link-instagram" href="/"></a>
            </div>
        </div>
    </section>)
}

export default Footer;