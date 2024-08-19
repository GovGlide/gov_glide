import React, { forwardRef, useState } from 'react';
import "./ContactForm.css";

const ContactForm = forwardRef((props, ref) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/xjkbewye', { // Замените на ваш Formspree URL
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset(); // Сброс формы после успешной отправки
            } else {
                const result = await response.json();
                setError(result.error || 'Что-то пошло не так');
            }
        } catch (err) {
            setError('Ошибка сети');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact_form" ref={ref}>
            <div className="contact_form_container">
                <h3 className="contact_form_title">Оставьте заявку на создание сайта</h3>
                <div className="contact_form_table">
                    <form onSubmit={handleSubmit} className="contact_form_form">
                        <div className="contact_form_info">
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя*"
                                className="contact_form_input"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон*"
                                className="contact_form_input"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="contact_form_input"
                                required
                            />
                        </div>
                        <button
                            className="send_button"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
            {isSubmitted && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Данные успешно отправлены!</h2>
                        <button onClick={() => setIsSubmitted(false)} className="close-button">Закрыть</button>
                    </div>
                </div>
            )}
            {error && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
});

export default ContactForm;

