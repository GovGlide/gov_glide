import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main_page/MainPage';
import AboutUs from "./pages/about_us/AboutUs";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/about_us',
            element: <AboutUs />,
        },
    ],
    {
        // Установите basename для маршрутизатора
        basename: '/gov_glide', // Замените на ваш путь
    }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
