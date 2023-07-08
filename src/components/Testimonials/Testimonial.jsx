import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/gra.jpg";
import profilePic2 from "../../img/work.jpg";
import profilePic3 from "../../img/work1.jpg";

const Testimonial = () => {
  const clients = [
    {
      img:profilePic3,
      review:
      'Software Engineer @ Brandwidth Technologies Pvt. Ltd',

    },
    {
      img: profilePic1,
      review:
        'Hindusthan College of Arts and Science, Coimbatore.',
    },
    {
      img: profilePic1,
      review:
        "Nehru Memorial College, Trichy.",
    },
    {
      img: profilePic1,
      review:
        "RR Cambridge Matriculation Higher Sec School, Kallakurichi.",
    },
    {
      img: profilePic1,
      review:
        " AKT Academic Matri Higher Sec School, Kallakurichi.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Professional Experience </span>
        <span>and </span>
        <span>Education...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
