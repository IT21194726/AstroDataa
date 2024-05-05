import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Lottie from 'react-lottie';
import 'bootstrap/dist/css/bootstrap.min.css';
import animationLeft from '../assets/animations/animation2.json';
import animationRight from '../assets/animations/animation2.json';

const Home = () => {
  const defaultOptionsLeft = {
    loop: true,
    autoplay: true,
    animationData: animationLeft,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsRight = {
    loop: true,
    autoplay: true,
    animationData: animationRight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'row', height: '100vh', position: 'relative', margin: 'auto' }}>
      <div style={{ position: 'absolute', left: '-150px', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Lottie options={defaultOptionsLeft} height={400} width={400} />
      </div>
      <div style={{ flex: 1, zIndex: 1 }}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 custom-img"
              src="https://i.pinimg.com/564x/2f/3e/07/2f3e0726b2e2bfff37e4528d0b46ff17.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5><Link to="/nasa-images" className="carousel-link">Search and Explore NASA Images</Link></h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 custom-img"
              src="https://i.pinimg.com/564x/13/0c/d3/130cd36a86bfd09ec049aff76538a445.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5><Link to="/mars-rover-photos" className="carousel-link">View Real Time Mars Rover Photos</Link></h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 custom-img"
              src="https://i.pinimg.com/564x/5e/54/54/5e5454fb45337d754aa77c5d3807b3e1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5><Link to="/apod" className="carousel-link">View Astronomy Picture of the Day</Link></h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ position: 'absolute', right: '-150px', width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Lottie options={defaultOptionsRight} height={400} width={400} />
      </div>
    </div>
  );
};

export default Home;
