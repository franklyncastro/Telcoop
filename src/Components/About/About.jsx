// import React from 'react'
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">Sobre Nosotros</h1>

      <div className="card">
        <p className="card-title">Telcoop</p>
        <p className="small-desc">
        Coop Banking es un servicio financiero basado en tecnología Internet ofrecido a los Socios de COOPERATIVA. 
            <br/><br/>
            El servicio esta disponible las 24 horas del dia, siete dias a la semana y brinda a los socios y miembros de la Cooperativa la flexibilidad y conveniencia de realizar muchas de sus operaciones financieras sin la necesidad de visitarla.
            <br/><br/>

            El menú de opciones ubicado en el lado izquierdo provee acceso a varios de los servicios que ofrece Internet-Coop. Para seleccionar, haga un simple Click en la opción correspondiente al servicio que desea usar.
            <br/><br/>
            Algunos de los servicios que provee Internet-Coop contienen información financiera personal del socio y requiere que usted tenga una clave de acceso.
        </p>
        <div className="go-corner">
            <Link to="/login">
          <div className="go-arrow">→</div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
