import Carousel from 'react-bootstrap/MyCarousel';

function MyCarousel() {
  return (
    <MyCarousel fade>
      <MyCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <MyCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MyCarousel.Caption>
      </MyCarousel.Item>
      <MyCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <MyCarousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MyCarousel.Caption>
      </MyCarousel.Item>
      <MyCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <MyCarousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MyCarousel.Caption>
      </MyCarousel.Item>
    </MyCarousel>
  );
}

export default MyCarousel;