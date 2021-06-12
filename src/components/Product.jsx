import React from "react"
import leaf from "../images/Group114.png"
import food from "../images/Group207.png"
import foodSelect from "../images/Group205.png"

function Product() {
    return (<section className="product" id="product">
        <img className="product-img" src={leaf} alt="Leaf Logo" />
        <h3>Welcome to Nature</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="product-list">
            <img src={food} alt="Food Product" />
            <img src={foodSelect} alt="Food Product" />
            <img src={food} alt="Food Product" />
            <img src={food} alt="Food Product" />
        </div>
    </section>
    )
}

export default Product;
