import React from 'react';
import "./Hero.css";
import background from "./images/background.png"
import cube from "./images/cube.png"

function Hero() {
    return (
        <div className="hero" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "800px"
        }}>
            <div className="hero_container">
                <div className="hero_title">
                    Создаем будущее цифровых технологий
                </div>
                <div className="hero_text">
                    Добро пожаловать в нашу IT-компанию, где мы специализируемся на веб-разработке, мобильных приложениях и дизайне. Благодаря нашему опыту мы воплощаем ваши идеи в жизнь и создаем выдающиеся цифровые решения.
                </div>
                <img src={cube} alt="cube" className="hero_cube"/> <br/>
                <button className="hero_button">
                    Оставить Заявку
                </button>
            </div>
        </div>
    );
}

export default Hero;