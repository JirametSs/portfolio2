import React from "react";

const AboutBox = () => {
    return ( 
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cups of Tea</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Satisfied Clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">Nominee Winner</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;
