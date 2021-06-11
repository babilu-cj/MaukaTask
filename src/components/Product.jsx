import React from "react"
import leaf from "../images/Group114.png"
import food from "../images/Group207.png"
import foodSelect from "../images/Group205.png"

function Product() {
    return (<section className="product">
        <img className="product-img" src={leaf} alt="Leaf Image" />
        <h3>Welcome to Nature</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="product-list">
            <img src={food} alt="Food Image" />
            <img src={foodSelect} alt="Food Image" />
            <img src={food} alt="Food Image" />
            <img src={food} alt="Food Image" />
        </div>
    </section>
    )
}

export default Product;
