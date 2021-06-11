import React from "react"
import greenaryOne from "../images/Group39.png"
import greenaryTwo from "../images/Group55.png"
import ecoDesign from "../images/Group64.png"

function Mention() {
    return (<section className="mention">
        <h3>Proudly presented by</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="mention-list">
            <img className="mention-img-one" src={greenaryOne} alt="The Greenary logo 1" />
            <img className="mention-img-two" src={ecoDesign} alt="Eco Design logo 1" />
            <img className="mention-img-three" src={greenaryTwo} alt="The Greenary logo 2" />
            <img className="mention-img-two" src={ecoDesign} alt="Eco Design logo 2" />
            <img className="mention-img-one" src={greenaryOne} alt="The Greenary logo 1" />
        </div>
    </section>
    )
}

export default Mention;