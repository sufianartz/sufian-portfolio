import React from "react";
import "./testimonial.css";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';

import  {Pagination} from 'swiper'
// import Swiper and modules styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos officia ipsum numquam obcaecati error fugit, ratione quasi pariatur, reiciendis soluta eius dicta animi similique saepe minima quas, blanditiis dolorem.",
  },
  {
    avatar: AVTR2,
    name: "ALex Zander",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos officia ipsum numquam obcaecati error fugit, ratione quasi pariatur, reiciendis soluta eius dicta animi similique saepe minima quas, blanditiis dolorem.",
  },
  {
    avatar: AVTR3,
    name: "Roger David",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos officia ipsum numquam obcaecati error fugit, ratione quasi pariatur, reiciendis soluta eius dicta animi similique saepe minima quas, blanditiis dolorem.",
  },
  {
    avatar: AVTR4,
    name: "Aena White",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos officia ipsum numquam obcaecati error fugit, ratione quasi pariatur, reiciendis soluta eius dicta animi similique saepe minima quas, blanditiis dolorem.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
      >
        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar"></img>
              </div>
              <h5 className="client__name"> {name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
