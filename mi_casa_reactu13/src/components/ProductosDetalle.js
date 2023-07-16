import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState} from 'react';
import '../css/prod.css';
import Barramenu from './Barramenu'
import Piepagina from './Piepagina';


const ProductosDetalle = () => {

  const {productId}  = useParams();
  const [ListadoProductos, setListadoProductos]=useState([]);
  
  useEffect (() => {
    fetch('https://64a38801c3b509573b563b83.mockapi.io/api/v1/productos')
      .then((Listado) => Listado.json())
	  .then((Listado) => {
        setListadoProductos(Listado);
      }) 
    },[]);
	
  const esteProducto = ListadoProductos.find(prod => prod.id === productId);

  if(!esteProducto){
    return (
        <div className='root'>
			<Barramenu/>
          <h1>NO HAY PRODUCTO CON ESE ID</h1>
        </div>
      )
  }
  return (
    <div className='root'>
        <Barramenu/>
        
      <div id='container-descrip'>
        <div className='titulop'><h1>{esteProducto.nombre}</h1></div>
        <div className='img-descrip'><div className='img-container'><img src={esteProducto.url}/></div>
        <div className='descrip'><p>Precio:</p> ${esteProducto.precio}<br></br>
        <p>Descripción: </p>{esteProducto.descripcion}</div></div>
      </div>
      
      <br></br>
      <Piepagina/>
    </div>
  )
}

export default ProductosDetalle;