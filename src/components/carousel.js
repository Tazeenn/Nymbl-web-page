import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './carousel.css'; 

var carouselData = [
  {
    id: 1,
    image: 'https://www.benymbl.co/img/home/enpowering-your-business.png',
    title: 'Empower your<br />business with<br />Nymbl.',
    description: 'Take payments, manage staff, conduct day-to-<br />day business online with the power of Nymbl!',
    link: '',
  },
  {
    id: 2,
    image: 'https://www.benymbl.co/img/home/size-not-matter.png', 
    title: "Size doesn't matter!",
    description: 'Run a business of any size efficiently with Cloud <br /> POS, integrated payments, inventory and other <br /> integrations',
    link: '',
  },
  {
    id: 3,
    image: 'https://www.benymbl.co/img/home/access-growth.png',
    title: 'Access growth<br />through seamless,<br />omnichannel<br/>approach.',
    description: 'Optimize your daily business operations with our<br />easy-to-use platforms',
    link: '',
  },
];

const AppCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }, 5000); 

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id='home' className='container-block mt-50' style={{ background: 'linear-gradient(to bottom, #ff0100, #ff4900)', height: '800px', position: 'relative' }}>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}controls={false}>
        {carouselData.map((carousel, index) => (
          <Carousel.Item key={carousel.id}>
            <div className='row'>
              <div className='col-md-6'>
                <Carousel.Caption style={{ textAlign: 'left', margin: '0', paddingTop: '20px' }}>
                  <CSSTransition in={activeIndex === index} timeout={1000} classNames='fade'>
                    <div>
                      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: carousel.title }} />
                      <p dangerouslySetInnerHTML={{ __html: carousel.description }} />
                      <Button variant='outline-light' href={carousel.link}>
                        Learn more
                      </Button>
                    </div>
                  </CSSTransition>
                </Carousel.Caption>
              </div>
              <div className='col-md-6'>
                <CSSTransition in={activeIndex === index} timeout={1000} classNames='slide'>
                  <img
                    className='d-block w-100'
                    src={carousel.image}
                    alt={'Slide ' + carousel.id}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </CSSTransition>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default AppCarousel;
