import React from "react"
import dp from "../images/dp.png"
import quotes from "../images/Group86.png"

function Testimonial() {
    return (<section className="testimonial">
        <img className="quotes" src={quotes} alt="quotes logo" />
        <div className="dp">
            <img src={dp} alt="user icon" />
        </div>
        <h6>Jane Doe</h6>
        <p>Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating.
            I’ve been roasting a lot of brussel sprouts and</p>
    </section>
    )
}

export default Testimonial;