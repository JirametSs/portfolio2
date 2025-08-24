import React from "react";
import "./sidebar.css";
import Logo from "../../assets/file.svg";

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            {/* โลโก้ */}
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="Logo" />
            </a>

            {/* เมนูการนำทาง */}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link" aria-label="Home" style={{ color: "#000000" }}> 
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link" aria-label="About" style={{ color: "#000000" }}>
                            <i className="icon-user-following"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link" aria-label="Services" style={{ color: "#000000" }}>
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#resume" className="nav__link" aria-label="Resume" style={{ color: "#000000" }}>
                            <i className="icon-graduation"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link" aria-label="Portfolio" style={{ color: "#000000" }}>
                            <i className="icon-layers"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#blog" className="nav__link" aria-label="Blog" style={{ color: "#000000" }}>
                            <i className="icon-note"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link" aria-label="Contact" style={{ color: "#000000" }}>
                            <i className="icon-bubble"></i>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* ลิขสิทธิ์ */}
            <div className="nav__footer">
                <span className="copyright">&copy; Portfolio 2025 </span>
            </div>
        </aside>
    );
};

export default Sidebar;
