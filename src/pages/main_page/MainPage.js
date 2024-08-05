import React from 'react';
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Branch from "../../components/branch/Branch";
import WebDev from "../../components/web_dev/WebDev";
import Citation from "../../components/citation/Citation";
import MobDev from "../../components/mob_dev/MobDev";
import ContactForm from "../../components/contact_form/ContactForm";
import SocialMedia from "../../components/social_media/SocialMedia";
import Footer from "../../components/footer/Footer";

function MainPage() {
    return (
        <>
            <Header/>
            <Hero/>
            <Branch/>
            <WebDev/>
            <Citation/>
            <MobDev/>
            <ContactForm/>
            <SocialMedia/>
            <Footer/>
        </>
    );
}

export default MainPage;
