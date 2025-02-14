import "react";
import {HiLocationMarker} from "react-icons/hi";

import './Hero.css';
const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className="hero-container">

                <div className="hero-left">
                    <div className="hero-title">
                    <h1><br/>Msell <br/> 
                    Reall Estate</h1>
                    </div>
                   
                   <div className="hero-desc">
                    <span>На една стъпка от мечтания дом!</span>
                    <span>Работим за постигането на вашите цели!</span>
                   </div>

                   <div className="search-bar">
                    <HiLocationMarker color="#ff5500" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

               
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