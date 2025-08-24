import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: Image1,
        title: "Jiramet Phumwatchara",
        subtitle: "Web Developer and Database Management",
        comment:
            "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Goodluck!"
    },
    {
        id: 2,
        image: Image3,
        title: "Tun Usaha",
        subtitle: "AI Engineer",
        comment:
            "I enjoy working with Jiramet Phumwatchara and like to play with his friends!"
    },
    {
        id: 3,
        image: Image1,
        title: "Nakarin chamnongkich",
        subtitle: "AI Engineer",
        comment:
            "I enjoy working with Jiramet Phumwatchara and like to play with his friends!"
        
    }
]

const Testimonials = () => {
    return (
        <section className="Testimonials container section" id="blog">
            <h2 className="section__title">Clients & Reviews</h2><br/>

            <Swiper className="testimonials__container grid" modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    grabCursor={true}
                    pagination={{ clickable: true }}>
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials__title" >{title}</h3>
                            <span className="subtitle" >{subtitle}</span>
                            <div className="comment" style={{ color: "#000000" }}>{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;