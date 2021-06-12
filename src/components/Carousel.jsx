import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import dp from "../images/dp.png"
import dpTwo from "../images/dp2.jpg"
import dpThree from "../images/dp3.jpg"
import Rating from "./Rating"

function NewCarousel() {
    return (<div className="carousel">
        <Carousel>
            <Carousel.Item>
                <div className="testimonial">
                <div className="dp">
                    <img src={dp} alt="user icon" />
                </div>
                <h6>Jane Doe</h6>
                <Rating />
                <p>Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating.
            I’ve been roasting a lot of brussel sprouts and</p>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="testimonial">
                <div className="dp">
                    <img src={dpTwo} alt="user icon" />
                </div>
                <h6>Dane Joe</h6>
                <Rating />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                 inventore veritatis eto.</p>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="testimonial">
                <div className="dp">
                    <img src={dpThree} alt="user icon" />
                </div>
                <h6>Bajh Wahe</h6>
                <Rating />
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                 molestias excepturi sint occaecati cupiditate.</p>
            </div>
            </Carousel.Item>
        </Carousel></div>)
}

export default NewCarousel;