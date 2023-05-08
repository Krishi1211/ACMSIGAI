import Carousel from 'react-bootstrap/Carousel';

function Carousels(props) {
  return (

    <Carousel variant="dark" className='image1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;