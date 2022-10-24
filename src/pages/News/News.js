import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const News = () => {
    const newsDetails = useLoaderData();
    return (
        <div>
            <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        src={newsDetails.author.img}
                        style={{ height: '60px' }}
                        roundedCircle
                        className='me-2'
                        >
                    </Image>
                    <div>
                        <p className='p-0 m-0'>{newsDetails.author.name}</p>
                        <p className='p-0 m-0'>{newsDetails.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark ></FaBookmark>
                    <FaShareAlt ></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{newsDetails.title}</Card.Title>
                <Card.Img variant="top" src={newsDetails.image_url} />
                <Card.Text>
                    {newsDetails.details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </div>
    );
};

export default News;