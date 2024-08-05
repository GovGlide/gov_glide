import "./MobDev.css"
import cube from "./images/cube.png"
import img_2 from "./images/img_2.jpg"


function MobDev() {
    return (
        <div className="web_dev">
            <div className="web_dev_container">
                <div className="web_dev_left">
                    <div className="web_dev_title">
                        Преобразование ваших идей на бумаге в <span>мобильные </span> приложения
                    </div>
                    <div className="web_dev_text">В эпоху мобильных технологий наличие качественного мобильного приложения
                        стало необходимостью для успешного ведения бизнеса. Мы предлагаем уникальные решения по разработке
                        мобильных приложений, которые помогут вам достичь успеха.
                    </div>
                    <div className="web_dev_row1">
                        <img src={cube} alt="cube"/>
                        <div className="web_dev_text1">Индивидуальный подход к каждому проекту</div>
                    </div>
                    <div className="web_dev_row2">
                        <img src={cube} alt="cube"/>
                        <div className="web_dev_text2">Современный дизайн для вашего бизнеса</div>
                    </div>
                </div>
                <div className="web_dev_right">
                    <img src={img_2} alt="img" width="550px" height="650px"/>
                </div>
            </div>
        </div>
    )
}


export default MobDev;