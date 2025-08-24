import React, { useState, useEffect } from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "th" : "en");
    };

    const texts = {
        en: {
            name: "Jiramet Phumwatchara",
            title: "I'm a FrontEnd Developer",
            hire: "Hire me",
            darkMode: "🌙 Dark Mode",
            lightMode: "☀️ Light Mode",
            switchLanguage: "🇹🇭 Switch to Thai"
        },
        th: {
            name: "จิรเมธ พุ่มวัชระ",
            title: "ฉันเป็นนักพัฒนา FrontEnd",
            hire: "จ้างฉัน",
            darkMode: "🌙 โหมดมืด",
            lightMode: "☀️ โหมดสว่าง",
            switchLanguage: "🇬🇧 เปลี่ยนเป็นภาษาอังกฤษ"
        }
    };

    return (
        <section className="home container" id="home">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? texts[language].darkMode : texts[language].lightMode}
            </button>
            <button className="language-toggle" onClick={toggleLanguage}>
                {texts[language].switchLanguage}
            </button>
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name" style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}>
                    {texts[language].name}
                </h1>
                <span className="home__education" style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}>
                    {texts[language].title}
                </span>

                <HeaderSocials /><br />

                <a href="#contact" className="btn"> {texts[language].hire} </a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    );
};

export default Home;
