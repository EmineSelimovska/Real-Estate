import "react";
import './Hero.css';
const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className="hero-container">

                <div className="hero-left">
                    <h1>Msell Reall Estate</h1>
                    <p>На една стъпка от мечтания дом!</p>
                      
                </div>

                <div className="hero-right">
                    <div className="img-container">
                        <img src="./hero-profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;