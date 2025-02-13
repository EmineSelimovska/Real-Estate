import "react";
import './Hero.css';
const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className="hero-container">

                <div className="hero-left">
                    Left Section
                </div>

                <div className="hero-right">
                    <div className="img-container">
                        <img src="./hero-profile.jpg" alt="" />
                    </div>
                    Right Section
                </div>
            </div>
        </section>
    )
}

export default Hero;