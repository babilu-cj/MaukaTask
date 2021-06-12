import React from "react"
import leaf from "../images/Group114.png"
import blogitems from "./blogitems"
import BlogItem from "./BlogItem"

function Blog() {
    return (<section className="blog" id="blog">
        <img className="product-img" src={leaf} alt="Leaf Logo" />
        <h3>Read Our Blog</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</p>
        <div className="blog-posts">
            {blogitems.map(item => <BlogItem key={item.id} url={item.url} title={item.title} content={item.content}/>)}
        </div>
    </section>
    )
}

export default Blog;
