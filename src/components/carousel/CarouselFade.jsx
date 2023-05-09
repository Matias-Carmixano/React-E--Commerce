import Carousel from 'react-bootstrap/Carousel';
import Naruto from '../../utils/Naruto.jpg';
import Shen from '../../utils/Shenlong.jpg';
import Sully from '../../utils/Sully.webp';
import '../../styles/Styles.css'

function CarouselFade() {
  return (
    <Carousel fade className='Responsive'>
      <Carousel.Item className='img-container img-responsive'>
        <img
          className="img-carousel"
          src={Naruto}
          alt="Naruto"
        />
      </Carousel.Item>
      <Carousel.Item className='img-container img-responsive '>
        <img
          className="img-carousel"
          src={Shen}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='img-container img-responsive'>
        <img
          className="img-carousel"
          src={Sully}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;