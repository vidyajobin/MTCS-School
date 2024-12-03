import Carousel from 'react-bootstrap/Carousel';

const HomeSlider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/mtcs-bg-3.jpg"
          alt="First slide"
          style={{maxHeight: '500px', objectFit: 'cover'}}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/mtcs4-enhanced-c.jpg"
          alt="First slide"
          style={{maxHeight: '500px', objectFit: 'cover'}}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/mtcs-bg-1.jpg"
          alt="First slide"
          style={{maxHeight: '500px', objectFit: 'cover'}}
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/images/mtcs3_enhanced.jpg"
          alt="First slide"
          style={{maxHeight: '500px', objectFit: 'cover'}}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;