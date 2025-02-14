import "react";
import { SocialIcon } from 'react-social-icons'
import './Footer.css'
const Footer = () => {
    return(
        <section className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-contact">
                    <div className="cont">
                        <span>
                           Офис: ул.Централна 1
                        </span>
                        <span>Телефон за връзка: 089202020</span>
                        <span>Имейл: msell@gmail.com</span>
                    </div>
                </div>

                <div className="footer-social">
                    <div className="media" >
                        <SocialIcon url="www.instagram.com" />
                        <SocialIcon url="www.facebook.com" />
                        <SocialIcon url="www.linkedin.com" />
                        <SocialIcon url="https://www.whatsapp.com/"/>
                    </div>
                </div>
                <div className="footer-info">
                    <span>Msell LTD. Недвижими имоти</span>
                    <span>2025 година</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;