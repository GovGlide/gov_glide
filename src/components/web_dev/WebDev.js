import "./WebDev.css"
import cube from "./images/cube.png"
import img from "./images/img.png"


function WebDev() {
    return (
        <div className="web_dev">
            <div className="web_dev_container">
                <div className="web_dev_left">
                    <div className="web_dev_title">
                        Откройте для себя возможности <span>веб-разработки</span> вместе с нашей командой экспертов
                    </div>
                    <div className="web_dev_text">В современном мире сайт – это лицо вашего бизнеса в интернете. Выбор
                        правильной компании для разработки веб-сайта может стать решающим фактором для успешного
                        продвижения вашего бренда.
                    </div>
                    <div className="web_dev_row1">
                        <img src={cube} alt="cube"/>
                        <div className="web_dev_text1">Индивидуальные решения для вашего бизнеса</div>
                    </div>
                    <div className="web_dev_row2">
                        <img src={cube} alt="cube"/>
                        <div className="web_dev_text2">Адаптивный дизайн для оптимального взаимодействия с пользователем</div>
                    </div>
                </div>
                <div className="web_dev_right">
                <img src={img} alt="img" width="550px" height="650px"/>
                </div>
            </div>
        </div>
    )
}


export default WebDev;