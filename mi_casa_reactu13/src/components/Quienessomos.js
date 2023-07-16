import React from 'react';
import Barramenu from './Barramenu';
import Piepagina from './Piepagina';

export const quienessomos = () => {
  return (
    <div>
    <Barramenu/>
      <div id="mision">        
        <h3>MISIÓN </h3>
        <p>Nuestra mision es ofrecer al consumidor productos de reposteria con la
         máxima calidad y a precios justos. Queremos elaborar productos de 
        alta calidad, utilizando lo mejores ingredientes y buena técnica. s</p>
      </div>
      <div id="mision">        
        <h3>VISIÓN </h3>
        <p>Mi casa horneados quiere ser reconocida como la mejor marca en la elaboración 
        productos de reposteria, sobresaliendo no solo por su calidad y originalidad 
        sino por su sabor.</p>
      </div>
      <div id="quien">        
        <h3>QUIENES SOMOS </h3>
        <p> Mi casa horneados nacio de la necesidad de ofrecer productos únicos para las celebraciones 
        o eventos familiares, por ello es que al ser una empresa familiar pensamos en 
        aquellos sabores de pastelería y repostería caseros exaltando los sabores
        artesanales en todos nuestros productos y con una calidad insuperable.
        Nuestra empresa se enorgullese de nuestro excelencia en los servicio que 
        ofrecemos, en los métodos de aseguramiento de la calidad y selección exclusiva 
        de nuestros ingredientes y en que cuidamos todos los detalles
        de nuestro producto final.</p>     
      </div>
    <Piepagina/>
    </div>
  )
};
export default quienessomos;
