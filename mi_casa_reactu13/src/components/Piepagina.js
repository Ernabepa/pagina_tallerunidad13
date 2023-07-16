import React from 'react'
import '../css/piepg.css';
import logo from '../assets/logo.png'
import imwhats from '../assets/whats.png'

export const piepagina = () => {
  return (
    <div>
        <footer>
        <div className="container-footer">
          <div className="foot-1">
            <div className="box">
              <figure>
                <img src={logo} width="120px" />
              </figure>
            </div>
            <div className="box">
              <h2>Mi casa Horneados</h2>
              <p>Productos hechos con amor</p>
            </div>
            <div className="box">
              <h2>Horario de atención</h2>
              <p>Lunes a Sábado: 10 am - 5:00 p.m </p>
            </div>
            <div className="box">
              <h2>Encuentranos</h2>
              <p>Calle 167 # 48-61 </p>
              <p>Bogotá</p>
              <p>Celular: 3125674328 </p>
            </div>
            <div className="box">
              <h2>Siguenos</h2>
              <div className="red">
                <img src={imwhats} width="30" height="30" />
              </div>
            </div>
          </div>
          <div className="foot-2">
            <small>&copy; 2023 <b>Mi Casa Horneados </b> - Todos los derechos reservados</small>
          </div>
        </div>
      </footer>

    </div>
  );
}
export default piepagina