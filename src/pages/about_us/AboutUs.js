import "./AboutUs.css";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/social_media/SocialMedia";
import Footer from "../../components/footer/Footer";
import Slogan from "../../components/slogan/Slogan";
import Services from "../../components/services/Services";


function AboutUs() {
    return (
        <>
            <Header/>
            <Slogan/>
            <SocialMedia/>
            <Services/>
            <Footer/>
        </>
    );
}

export default AboutUs;