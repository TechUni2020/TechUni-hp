import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { getAllBlogs } from "../../api/BlogApiRespository";
import BlogListItem from "./BlogListItem";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    React.useEffect(() => {
        getAllBlogs(import.meta.env.VITE_CMS_URL).then(response => {
            setBlogs(response)
        })
    }, []);
    return (
            <Container fluid className="about-section">
                <Container>
                    {
                        blogs.map((blog) =>
                                <BlogListItem key={blog.id}
                                              id={blog.id}
                                              title={blog.title.rendered}
                                              date={blog.date}
                                              content={blog.excerpt.rendered}/>
                        )
                    }
                </Container>
            </Container>
    );
}

export default BlogList;
