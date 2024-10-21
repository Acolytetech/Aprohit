import React, { useState, useEffect } from 'react';
import stylesservice from'./Services.module.css';
import image1 from '../../img/selected img/Assured.jpg';
import image2 from '../../img/selected img/Commitment.jpg';
import image3 from '../../img/selected img/supply.png';
import image4 from '../../img/selected img/Quality.jpg';
 
const serviceData = [
  {
    title: 'Assured Delivery Directly from Farmers',
    image: image1,
    description: 'Direct purchases from local farmers ensure freshness and quality raw materials. Besides, this gives good business to the rural community and thus follows the tenets of fair trade.'
  },
  {
    title: 'Commitment to Sustainability',
    image: image2,
    description: 'The environment-friendly feed solution that we have ensures minimal wastage and less environmental degradation. We work in tune with global sustainability objectives.'
  },
  {
    title: 'Innovative Supply Chain Management',
    image: image3,
    description: 'Our cutting-edge logistics and distribution systems are designed to guarantee the timely delivery of products while maintaining cost efficiency throughout the supply chain.'
  },
 
  {
    title: 'Equitable Pricing Models',
    image: image4,
    description: 'The cornerstones of our model include transparent pricing and stable cost structures. It makes the products more affordable for our customers while making sure we can fairly compensate the farmers.'
  }
];
 
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([]);
 
  const updateVisibleSlides = () => {
    const isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed
    const slidesToShow = isMobile ? 1 : 3; // 1 for mobile, 3 for desktop
    const newSlides = serviceData.slice(currentIndex, currentIndex + slidesToShow);
    setVisibleSlides(newSlides.length === slidesToShow ? newSlides : [...newSlides, ...serviceData.slice(0, slidesToShow - newSlides.length)]);
  };
 
  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [currentIndex]);
 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
  };
 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceData.length) % serviceData.length);
  };
 
  return (
    <section className={`${stylesservice.homeServices} ${stylesservice.whiteBg}`} id="services">
      <div className={stylesservice.serviceContainer}>
        <div className={stylesservice.service_flex}>
          <div className={stylesservice.services_col_12}>
            <div className={stylesservice.herotext}>
              <h6>Why Choose Us?</h6>
              <h2>Feed the Future with Trust and Innovation</h2>
              <h5>Efficient Supply Chain for Timely and Cost-Effective Delivery</h5>
            </div>
          </div>
        </div>
        <div className={stylesservice.servicesCarousel}>
          <div className={stylesservice.carouselInner}>
            <div className={stylesservice.service_slide_container}>
              {visibleSlides.map((service, index) => (
                <div className={stylesservice.service_block} key={index}>
                  <h2>{service.title}</h2>
                  <div className={`${stylesservice.pic} ${stylesservice.p_4}`}>
                    <img src={service.image} className={`${stylesservice.img_fluid} ${stylesservice.text_center}`} alt={service.title} />
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`swiper-button-next services-swiper-button next ${stylesservice.swiper_button_next} ${stylesservice.services_swiper_button} ${stylesservice.next}`} onClick={nextSlide}></div>
          <div className={`swiper-button-prev services-swiper-button prev ${stylesservice.swiper_button_prev} ${stylesservice.services_swiper_button} ${stylesservice.prev}`} onClick={prevSlide}></div>
        </div>
      </div>
    </section>
  );
};
 
export default Services;