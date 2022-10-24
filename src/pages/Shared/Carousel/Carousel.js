import Carousel from 'react-bootstrap/Carousel';
import Bannar1 from '../../../assets/Images/bannar1.webp';
import Bannar2 from '../../../assets/Images/bannar2.webp'

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h6>Brand Name</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Bannar2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h6>Brand Name</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;