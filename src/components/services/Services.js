import "./Services.css"
import cube from "./images/cube.png"


function Services() {
    return (
        <div className="services">
            <div className="services_container">
                <div className="services_title">ЧТО мы можем?</div>
                <div className="services_block">
                    <div className="service_one">
                        <img src={cube} className="cube" alt="cube"/>
                        <div className="service_description">
                            <div className="service_name">Разработка мобильных приложении под ключ</div>
                            <div className="service_text">Приложения любой сложности, консультация, анализ ваших
                                конкурентов и вашего бизнеса, геймификация процессов!
                            </div>
                        </div>
                    </div>
                    <div className="service_one">
                        <img src={cube} className="cube" alt="cube"/>
                        <div className="service_description">
                            <div className="service_name">Разработка сайтов и платформ под ключ</div>
                            <div className="service_text">Сайт вашего бизнеса любого значения - платформа для обучения, лендинг, информационный портал и многое другое!
                            </div>
                        </div>
                    </div>
                    <div className="service_one">
                        <img src={cube} className="cube" alt="cube"/>
                        <div className="service_description">
                            <div className="service_name">Дизайн вашего бизнеса</div>
                            <div className="service_text">Логотип, брендбук, дизайн вашего помещения, меню для ресторанов, одежда, рекламнные баннеры, посты и многое другое!
                            </div>
                        </div>
                    </div>
                    <div className="service_one">
                        <img src={cube} className="cube" alt="cube"/>
                        <div className="service_description">
                            <div className="service_name">Аутсорсинг</div>
                            <div className="service_text">Возможность частичного выполнения вашей работы нашей командой разработчиков. Освобождая ваше время на более важные аспекты вашего бизнеса!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;