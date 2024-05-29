// import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';


function Navegacion() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand"><h1 className="title">Telcoop</h1></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/home" className="link">
            <a className="nav-link active" aria-current="page">Inicio</a>
        </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">
            <a className="nav-link" >Sobre nosotros</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="link">
          <a className="nav-link" >Iniciar Sesion</a>
        </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Herramientas
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Recuper Clave</a></li>
              <li><a className="dropdown-item">Calculadora de Prestamos</a></li>
              
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navegacion;
