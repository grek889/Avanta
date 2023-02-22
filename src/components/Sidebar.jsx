import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Strip from "../assets/Strip.svg";

export const Sidebar = () => {
  return (
    <nav className="sidenav">
      <img className="sidenav__logo" src={Logo} alt="Logo" />
      <div className="sidenav__navLinks">
        {/* <div className="sidenav__main">
          <img src={Strip} alt="Strip" />
          <Link to="/" className="sidenav__mainLink">Главная страница</Link>
        </div> */}
        <ul>
          <li>
            <img className="sidenav__rectangle" src={Strip} alt="Strip" />
            <Link to="/"> Главная страница</Link>
          </li>
          <li>
            <Link to="about">О нас</Link>
          </li>
          <li>
            <Link to="services">Услуги</Link>
          </li>
          <li>
            <Link to="projects">Проекты</Link>
          </li>
          <li>
            <Link to="protection">Охрана труда</Link>
          </li>
          <li>
            <Link to="contacts">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="sidenav__contacts">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, modi id. Natus facilis adipisci omnis sequi unde aliquam dignissimos, similique ratione culpa pariatur laudantium, corporis rerum neque quam exercitationem amet!</div>
    </nav>
  );
};
