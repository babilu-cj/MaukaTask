import React from "react"
import quotes from "../images/Group86.png"
import NewCarousel from "./Carousel"

function Testimonial() {
    return (<section className="testimonial">
        <img className="quotes" src={quotes} alt="quotes logo" />
        <NewCarousel />
    </section>
    )
}

export default Testimonial;