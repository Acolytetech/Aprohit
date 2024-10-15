import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import stylecss from './Testimonialslider.module.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonialslider() {
  const slides = [
    {
      image: 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMjgwNS5qcGVn',
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      clientName: 'sachin lawaniya'
    },
    {
      image: 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMjgwNS5qcGVn',
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      clientName: 'vinod alwani'
    },
    {
      image: 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMjgwNS5qcGVn',
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      clientName: 'chahat sharma'
    },
    {
      image: 'https://thispersonnotexist.org/downloadimage/Ac3RhdGljL3dvbWFuL3NlZWQxMjgwNS5qcGVn',
      content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      clientName: 'anil sharma'
    }
  ];

  return (
    <>
      <div className={stylecss.testimonial}>
        <p>TESTIMONIALS</p>
        <h1>What Our Clients Say!</h1>
        <p>Blogging is a conversation, not a code.</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Add all required modules here
        className={`mySwiper ${stylecss.swiper_container}`}
        // slidesPerView={1.9}
        spaceBetween={10}
        breakpoints={{
          // when window width is <= 600px
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 900px
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30
          },
          // when window width is <= 1200px
          1200: {
            slidesPerView: 1.9,
            spaceBetween: 30
          }
        }}
      
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true} // Correct loop value
        centeredSlides={true}
        navigation={{
          nextEl: `.${stylecss.swiper_button_next}`,
          prevEl: `.${stylecss.swiper_button_prev}`
        }}
        pagination={{
          el: `.${stylecss.swiper_pagination}`,
          clickable: true,
          type: 'bullets'
        }}
      >
        {/* Pagination Dots */}
        <div className={`swiper-pagination ${stylecss.swiper_pagination}`}></div>

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
