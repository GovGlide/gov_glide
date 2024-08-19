import React from 'react';
import "./Header.css";
import logo from "./images/logo.svg"
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header_container">
                <div className="header_left">
                    <img src={logo} alt="logo" className="logo" width="104px" height="80px"/>
                    <Link to={"/"} className="logo_text">GovGlide</Link>
                </div>
                <div className="header_right">
                    <Link to={"/about_us"} className="about_us"> О Нас </Link>
                    <div>Дизайн</div>
                    <div>Комьюнити</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
