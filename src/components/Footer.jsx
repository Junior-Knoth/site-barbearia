import React from "react";
import { Link } from "react-router";
// Importing bootstrap

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li className="footer-link-item">
            <Link className="footer-link" to="/">
              Home
            </Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link" to="/sobre">
              Sobre
            </Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link" to="/servicos">
              Serviços
            </Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link" to="/galeria">
              Galeria
            </Link>
          </li>
          <li className="footer-link-item">
            <Link className="footer-link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer-info">
        <p className="address">
          <i class="bi bi-pin-map-fill pin"></i>
          <strong> Endereço</strong>: Rua Exemplo, 123 - Centro, Cidade -
          Estado, 12345-678
        </p>
        <p className="contact">
          <i class="bi bi-telephone-fill phone"></i> <strong>Contato</strong>:
          (11) 91234-5678
        </p>
      </div>

      <p className="schedule">
        <i class="bi bi-clock-fill clock"></i> <strong>Horários</strong>:
        <ul>
          <li>Seg-Sex: 09h às 19h</li>
          <li>Sáb: 09h às 17h</li>
          <li>Dom: Fechado</li>
        </ul>
      </p>
      <p className="social-media">
        <p>
          <i class="bi bi-facebook"></i> facebook.com/navalhadeouro
        </p>
        <p>
          <i class="bi bi-instagram"></i> @navalhadeouro
        </p>
        <p>
          <i class="bi bi-whatsapp"></i> (11) 91234-5678
        </p>
      </p>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Navalha de Ouro Barbearia — Todos os
        direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
