import "./SocialMedia.css"
import figure from "./images/figure.png"
import whatsapp from "./images/whatsapp.svg"
import discord from "./images/discord.svg"
// import google from "./images/google.svg"
import linkedin from "./images/linkedin.svg"
import instagram from "./images/instagram.png"
import big_logo from "./images/big_logo.png"

function SocialMedia() {
    return (
        <div className="social_media">
            <div className="social_media_container">
                <img src={figure} alt="" className="social_media_figure"/>
                <div className="social_media_text">Мы во <br/> всемирной <br/> паутине</div>
                <div className="social_media_links">
                    <div className="social_media_row">
                        <div className="oval_pink"></div>
                        <div className="oval_red"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_dark"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                    </div>
                    <div className="social_media_row">
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_red"></div>
                        <div className="social_media_linkedin">
                            <a href="https://www.linkedin.com/company/govglide" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/> </a>
                        </div>
                        <div className="oval_pink"></div>
                            <a href="https://www.instagram.com/govglide.kz?igsh=ODNhdHBwbGUwcGJ5" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" width="90" height="90" /> </a>
                        <div className="oval_dark"></div>
                        <div className="oval_pink"></div>
                    </div>
                    <div className="social_media_row">
                        <div className="oval_red"></div>
                        <div className="social_media_discord">
                            <a href="https://discord.gg/zVFABKwm" target="_blank" rel="noopener noreferrer"><img src={discord} alt="discord"/> </a>
                        </div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="social_media_whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=77088296919" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp"/> </a>
                        </div>
                        <div className="oval_dark"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                    </div>
                    <div className="social_media_row">
                        <div className="oval_pink"></div>
                        <div className="oval_dark"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_red"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_pink"></div>
                        <div className="oval_red"></div>
                    </div>
                </div>
             <div>
                 <img src={big_logo} alt="big_logo" className="big_logo"/>
             </div>
            </div>
        </div>
    )
}


export default SocialMedia;
