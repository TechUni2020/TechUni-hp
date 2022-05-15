import React from "react";
import { Link } from "react-router-dom";
const BlogListItem = (props) => {
    return (
            <Link to={`/blog/${props.id}`}>
                <div style={{color: 'black', border : "solid 10px"}}>
                    <h1>{props.id}</h1>
                    <h1>{props.title}</h1>
                    <span>{props.date}</span>
                    <div dangerouslySetInnerHTML={{__html: props.content}}/>
                </div>
            </Link>
    )
}

export default BlogListItem;