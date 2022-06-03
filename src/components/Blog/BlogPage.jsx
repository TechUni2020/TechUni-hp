import React, { useState } from "react";
import { getBlog } from "../../api/BlogApiRespository";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";


const BlogPage = () => {
    const [blog, setBlog] = useState();
    let params = useParams();

    React.useEffect(() => {
        getBlog(import.meta.env.VITE_CMS_URL, params.blogId).then(response => {
            setBlog(response)
        })
    }, [params]);

    return (
            <Container fluid className="about-section">
                <Container>

                    {blog ? <div>
                                <h1>{blog.title.rendered}</h1>
                                <p dangerouslySetInnerHTML={{__html: blog.content.rendered}}/>
                            </div>
                            : <h1>Loading...</h1>}
                </Container>
            </Container>
    );
}


export default BlogPage;
