import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data/blog.json')
        .then(data => data.json())
        .then(data => setBlogs(data));
    } , [])


    console.log(blogs);

    return (
        <div>
           <Container>
           <Row>
            <Col>
              
                {
                    blogs.map(blog => (

                        <Card  className='p-4 my-2' key={blog.id}>
                    <Card.Title>
                        {blog.questionName}
                       
                    </Card.Title>
                    <Card.Body>
                        <Card.Subtitle>
                            {blog.Answer?.def}
                           
                        </Card.Subtitle>

                        {
                                blog.Answer?.Authorization.length > 0 && blog.Answer?.authentication.length > 0 ? (
                                   <Row className='my-3'>
                                     <Col>
                                        <ul class="list-group list-group-flush">
                                            { blog.Answer?.Authorization.map((authori, index) =>
                                                <li class="list-group-item" key={index}>{authori}</li>
                                            )}
                                            
                                        </ul>
                                    </Col>
                                    <Col>
                                    <ul class="list-group list-group-flush">
                                            { blog.Answer?.authentication.map((authori, index) =>
                                                <li class="list-group-item" key={index}>{authori}</li>
                                            )}
                                            
                                        </ul>
                                    </Col>
                                   </Row>
                                ) :''
                            }

                        {
                           blog.Answer?.database && <p><strong>Database:</strong>{blog.Answer.database}</p> 
                        }
                        {
                           blog.Answer?.messaging && <p><strong>Cloud Messaging:</strong>{blog.Answer.messaging}</p> 
                        }
                        {
                           blog.Answer?.config && <p><strong>Config:</strong>{blog.Answer.config}</p> 
                        }
                        {
                           blog.Answer?.others && <p><strong>Alter native:</strong>{blog.Answer.others}</p> 
                        }



                    </Card.Body>
                </Card>
              
               

                    ))
                }
                 
               </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Blog;