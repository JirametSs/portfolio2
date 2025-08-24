import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2><br />

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                <div className="about__info" >
                    <p className="about__description" style={{ color: "#000000" }}>
                        I am <strong>Jiramet Phumwatchara</strong>, a <span className="highlight">FrontEnd Developer</span> 
                        and freelance from Chiang Mai. I have experience and good memories 
                        in <span className="highlight">Chiang Mai University</span>. I also have expertise in various programs.
                    </p>
                    <a href="#1" className="btn">Download CV</a>
                </div>
                
                    <div className="about__skills grid" style={{ color: "#000000" }}>
                        <div className="skills__data" >
                            <div className="skills__titles" >
                                <h3 className="skills__name" style={{ color: "#000000" }}>Development</h3>
                                <span className="skills__number">90%</span>
                            </div>
                                
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div><br />

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name" style={{ color: "#000000" }}>UI/UX design</h3>
                                <span className="skills__number ">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div><br />

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name" style={{ color: "#000000" }}>Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;