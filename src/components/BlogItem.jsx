import React from "react"

function BlogItem(props) {
    return (<div className="blog-item">
        <img src={props.url} alt="Blog post"/>
        <h6>{props.title}</h6>
        <p>{props.content}</p>
        <button>Read More</button>
        <span></span>
    </div>)
}

export default BlogItem;