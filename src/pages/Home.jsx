import React from "react";
import { Link } from "react-router";

import Banner from "../assets/banner.png";
import BarberGroup from "../assets/barber-group.png";

function Home() {
  return (
    <>
      <section className="hero-section">
        <img
          src={Banner}
          alt="Barbeiro cortando a barba de um cliente"
          className="banner-img"
        />
        <h1 className="banner-title">
          Navalha de ouro <br />
          Corte, estilo e tradição
        </h1>
      </section>
      <section className="sobre-section">
        <h2 className="sobre-title">Sobre nós</h2>
        <img
          className="sobre-img"
          src={BarberGroup}
          alt="Um grupo de funcionários da barbearia sorrindo"
        />
        <p className="sobre-text">
          Somos uma barbearia dedicada a oferecer muito mais que um simples
          corte de cabelo. Aqui você encontra tradição, estilo e um atendimento
          de primeira. Seu visual, do seu jeito.
        </p>
        <Link className="sobre-btn">Saiba mais sobre nós</Link>
      </section>
      <section className="services-section">
        <h2>Nossos serviços</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={BarberGroup} alt="" />
            <h3>Corte Masculino</h3>
            <p className="price">Preço: R$50,00</p>
          </div>
          <div className="service-item">
            <img src={BarberGroup} alt="" />
            <h3>Barba tradicional</h3>
            <p className="price">Preço: R$35,00</p>
          </div>
          <div className="service-item">
            <img src={BarberGroup} alt="" />
            <h3>Sobrancelha</h3>
            <p className="price">Preço: R$20,00</p>
          </div>
          <div className="service-item">
            <img src={BarberGroup} alt="" />
            <h3>Camuflagem de Fios</h3>
            <p className="price">Preço: R$60,00</p>
          </div>
          <div className="service-item">
            <img src={BarberGroup} alt="" />
            <h3>Corte + Barba</h3>
            <p className="price">Preço: R$80,00</p>
          </div>
        </div>
        <Link className="services-btn">Ver todos os serviços</Link>
      </section>
      <section className="review-sect">
        <h2>Depoimentos</h2>
        <div className="review-list">
          <div className="review">
            <div className="review-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-text">
              "Ambiente top! Ótimos profissionais, sempre saio satisfeito.
              Recomendo demais!"
            </p>
            <p className="review-author">— Lucas F.</p>
          </div>
          <div className="review">
            <div className="review-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-text">
              "Atendimento excelente e os caras mandam muito bem. Melhor
              barbearia da cidade."
            </p>
            <p className="review-author">— Rafael S.</p>
          </div>
          <div className="review">
            <div className="review-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-text">
              "Já sou cliente faz anos. Sempre saio com o corte impecável e
              atendimento nota 10."
            </p>
            <p className="review-author">— Marcos A.</p>
          </div>
        </div>
      </section>
      <div className="call-to-action">
        <p>
          Pronto para renovar seu visual? Agende agora seu horário e garanta
          aquele atendimento especial que você merece.
        </p>
        <button>Agende pelo WhatsApp</button>
      </div>
    </>
  );
}

export default Home;
