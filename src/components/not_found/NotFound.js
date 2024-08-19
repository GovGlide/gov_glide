import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, страница которую вы ищете не существует.</p>
      <Link to="/" className="back-home">
        Вернуться назад
      </Link>
    </div>
  );
}

export {NotFound}