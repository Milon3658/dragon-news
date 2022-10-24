import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt } from "react-icons/fa";


const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        src={author.img}
                        style={{ height: '60px' }}
                        roundedCircle
                        className='me-2'
                        >

                    </Image>
                    <div>
                        <p className='p-0 m-0'>{author.name}</p>
                        <p className='p-0 m-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark ></FaBookmark>
                    <FaShareAlt ></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>
                                {details.slice(0, 220) + '...'}<Link to={`/news/${_id}`}>Read More</Link>
                            </p> :
                            <p>{details}</p>
                    }
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;