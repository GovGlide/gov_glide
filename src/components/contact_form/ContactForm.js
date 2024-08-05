import "./ContactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const form = useRef();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_woy5ee8", "template_vtn9jfp", form.current, "1QyUAIaCuQzn4dgpT")
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsModalVisible(true);
                    e.target.reset(); // Сброс формы после успешной отправки
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="contact_form">
            <div className="contact_form_container">
                <h3 className="contact_form_title">ОСТАВЬТЕ ЗАЯВКУ НА СОЗДАНИЕ <br/> САЙТА</h3>
                <div className="contact_form_table">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact_form_info">
                            <input type="text" placeholder="Имя*" name="name" className="contact_form_input" required />
                            <input type="text" placeholder="Телефон*" name="phone" className="contact_form_input" required />
                            <input type="text" placeholder="Email*" name="email" className="contact_form_input" required />
                        </div>
                        <button className="send_button" type="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Данные успешно отправлены! <br/>
                        Мы обязательно скоро свяжемся с вами</h2>
                        <button onClick={closeModal} className="close-button">Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
