import React from "react";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>

          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aliquam libero eius, nobis optio exercitationem voluptatum sapiente,
            error eum nam ea saepe quia harum ex. Beatae itaque nemo dolor
            debitis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="" />
          </div>

          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aliquam libero eius, nobis optio exercitationem voluptatum sapiente,
            error eum nam ea saepe quia harum ex. Beatae itaque nemo dolor
            debitis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="" />
          </div>

          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aliquam libero eius, nobis optio exercitationem voluptatum sapiente,
            error eum nam ea saepe quia harum ex. Beatae itaque nemo dolor
            debitis.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="" />
          </div>

          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aliquam libero eius, nobis optio exercitationem voluptatum sapiente,
            error eum nam ea saepe quia harum ex. Beatae itaque nemo dolor
            debitis.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
