import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";


const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX Design",
        description: "We create modern and user-friendly designs that help you stand out from the competition.",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description: "We develop custom websites and web applications that are fast, secure, and scalable.",
    },
    {
        id: 3,
        image: Image3,
        title: "Photography",
        description: "We build cross-platform mobile applications that run on both Android and iOS devices.",
    },
];


const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2><br/>
        
            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div key={id} className="services__card">
                        <img src={image} alt={title} className="services__image" /><br />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;