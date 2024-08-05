import "./Footer.css";
import logo from "./images/logo.png";
import phone from "./images/phone.png";
import post from "./images/post.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <img src={logo} alt="logo" className="footer_logo"/>
                <hr className="hr"/>
                <div className="footer_bottom">
                    <div className="footer_bottom_year">
                        © 2024 GovGlide
                    </div>
                    <div className="footer_contacts">
                        <div className="footer_contact_item">
                            <img src={phone} alt="phone"/>
                            <div className="footer_phone">+7 (708) 829-6919</div>
                        </div>
                        <div className="footer_contact_item">
                            <img src={post} alt="post"/>
                            <div className="footer_post">govglide.kz@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
