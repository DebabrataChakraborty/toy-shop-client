import Carousel from "react-bootstrap/Carousel";
import './Banner.css'
function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://www.brickfinder.net/wp-content/uploads/2020/02/DnVT5pOX4AEfOlq-1-1024x576.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-warning"> It's Hero Time</h3>
          <p className="text-info">REAL HEROES ARE THOSE WHO RISK THEIR LIVES TO SAVE LIVES</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://live.staticflickr.com/4128/5125579893_b8a1e3ea2d_b.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pokemon Collection </h3>
          <p>Don't wait for any hero to save you, become one.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://static.seibertron.com/images/toys/files/154/hasbro-cliffjumper-138.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-warning">Transformer Collection</h3>
          <p className="text-info">
          Autobots, transform and roll out
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
