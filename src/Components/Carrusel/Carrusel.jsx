// import React from "react";
import './carrusel.css'

import img1 from '../../assets/img/coopMujer.png'
import img2 from '../../assets/img/mujer.png'
import img3 from '../../assets/img/madre.png'

const Carrusel = () => {
  return (
    <div className="Container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="img d-block " alt="img" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="img d-block " alt="img" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="img d-block " alt="img" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
