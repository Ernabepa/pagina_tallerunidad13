import React from 'react';
import '../css/App.css';
import contac from '../assets/conta.jpeg';
import Barramenu from './Barramenu';
import Piepagina from './Piepagina';

const contactenos = () => {
  return (
    <div>
    <Barramenu/>
      <div class="contenedor-contac">    
        <img id="img-conta" src={contac}  ></img>
      <div >
        <form>
          <label> Nombre Completo: </label><br></br>
            <input  type="text" name ="Nombre" id="name"/> <br></br>
          <label> Correo: </label><br></br>
            <input type="email" name ="email" id="correo"/> <br></br>
          <label> Teléfono: </label><br></br>
            <input type="tel" name ="telefo" id="telefono" /> <br></br>
          <label> Asunto: </label><br></br>
            <input type="text" name ="asu" id="asunto"/> <br></br>
          <label> Mensaje: </label><br></br>
            <input type="text" name ="mesage" id="mensaje" /><br></br>
        </form>
      </div>
      </div>
    <Piepagina/>
</div>
  )
};
export default contactenos;