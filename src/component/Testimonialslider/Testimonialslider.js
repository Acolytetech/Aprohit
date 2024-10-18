import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import anita from '../../img/anita.png';
import rajesh from '../../img/rajesh.png';
import anil from '../../img/anil.png';
import vikkarm from '../../img/vikkarm.png';
import stylecss from './Testimonialslider.module.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonialslider() {
  const slides = [
    {
      image: rajesh,
      content: "Paruit's innovative solutions have transformed the way we manage our cattle. Their technology has significantly improved our efficiency and animal health. Highly recommend them to any farm looking to modernize!",
      clientName: 'Rajesh Kumar',
    },
    {
      image: anita,
      content: "Since partnering with Paruit, we've seen a noticeable improvement in cattle health and farm productivity. Their support team is always ready to assist, making our experience seamless and rewarding.",
      clientName: 'Anita Verma',
    },
    {
      image: vikkarm,
      content: "Thanks to Paruit, managing our cattle has never been easier. Their technology has streamlined our operations and improved our animals' well-being. I highly recommend them to any farmer.",
      clientName: 'Vikram Singh',
    },
    {
      image: anil,
      content: "Paruit’s solutions have made cattle management easier and more effective for our team. Their expertise in the field is unmatched, and the results speak for themselves. Truly a game-changer!",
      clientName: 'Anil Sharma',
    },
  ];

  return (
    <>
      <div className={stylecss.testimonial}>
        <h6>TESTIMONIALS</h6>
        <h2>What Our Clients Say!</h2>
        <h5>We are proud to partner with farmers and agricultural businesses who trust us.</h5>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${stylecss.swiper_container}`}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 1.9,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next', // Swiper's default class
          prevEl: '.swiper-button-prev', // Swiper's default class
        }}
        pagination={{
          el: '.swiper-pagination', // Swiper's default class
          clickable: true,
          type: 'bullets',
        }}
      >
        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>

        {/* Navigation Arrows */}
        <div className={`swiper-button-prev ${stylecss.swiper_button_prev}`}></div>
        <div className={`swiper-button-next ${stylecss.swiper_button_next}`}></div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={stylecss.swiper_slide}>
            <div className={stylecss.slide_content}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className={stylecss.slide_image} />
              <div className={stylecss.slide_content_text}>
                <p>{slide.content}</p>
                <h4>{slide.clientName}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={stylecss.fade}></div>
      </Swiper>
    </>
  );
}
