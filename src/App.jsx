import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

// Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Galeria from "./pages/Galeria";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        {console.log("App component rendered")}
        <div className="app-layout">
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/servicos" element={<Servicos />}></Route>
            <Route path="/galeria" element={<Galeria />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
