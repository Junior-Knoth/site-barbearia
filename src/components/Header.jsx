import React from "react";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";

// Images
import logo from "../assets/logo-min.png";

function Header() {
  return (
    <header id="main-header">
      <nav id="header-nav">
        <a id="logo-container" href="#">
          <img src={logo} alt="Logo da barbearia" id="header-logo" />
        </a>

        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/sobre"} className="nav-link">
              Sobre
            </Link>
          </li>
          <li>
            <Link to={"/servicos"} className="nav-link">
              Serviços
            </Link>
          </li>
          <li>
            <Link to={"/galeria"} className="nav-link">
              Galeria
            </Link>
          </li>
          <li>
            <Link to={"/contato"} className="nav-link">
              Contato
            </Link>
          </li>
          <button className="scheduling-btn">
            <i className="bi bi-whatsapp white"></i> Agende pelo WhatsApp
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
