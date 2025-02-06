import React from "react";
import  "./Header.css";
const Header = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <img src="./logo.jpg" alt="logo" width={100} />

        <div className="menu-header">
          <a href="">Начало</a>
          <a href="">За нас</a>
          <a href="">Имоти</a>
          <a href="">Услуги</a>
          <a href="">Контакти</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
