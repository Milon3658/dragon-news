import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google </Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Login with Github </Button>
            </ButtonGroup>
            <h6>Find us on</h6>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightSideNav;