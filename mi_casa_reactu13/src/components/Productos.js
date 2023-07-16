import React from 'react';
import { useEffect,useState} from 'react';
import '../css/prod.css';
import { Link } from 'react-router-dom';
import Barramenu from './Barramenu';
import Piepagina from './Piepagina';
const Productos = () => {

const [ListadoProductos, setListadoProductos]=useState([]);
const[categoriaFiltro,setCategoriaFiltro]=useState('');
const[categorias,setCategorias] = useState([]);
  
 useEffect (() => {
    fetchData();
    fetchCategorias();
    },[categoriaFiltro]);

	const fetchData = () => {

    var url = 'https://64a38801c3b509573b563b83.mockapi.io/api/v1/productos'
    
    if(categoriaFiltro){
      url += `?categoria=${categoriaFiltro}`;
    }

    fetch(url)
    .then((Listado) => Listado.json())
  .then((Listado) => {setListadoProductos(Listado)}) 
  }
 
  const fetchCategorias =() => {
       fetch('https://64a38801c3b509573b563b83.mockapi.io/api/v1/productos')
    .then((datos) => datos.json())
    .then((datos) => {
      const catUnicas = [...new Set(datos.map((prod) => prod.categoria))]
      setCategorias(catUnicas);
    })  
  }
    return (
      <div>
        <Barramenu/>  
        <div className="titulo_prod">PRODUCTOS</div> 
          <div className='categoria'> Sabor : 
          <select value={categoriaFiltro} onChange={(event) => setCategoriaFiltro(event.target.value)}>
            <option value="">Todos</option>
            {categorias.map((cat, id) => (
              <option key={id} value = {cat}>{cat}</option>
            )
            )}
          </select> <br></br><br></br>
          </div>
          <div id='listado-product'>
            {ListadoProductos.map((item, index) => (
            <div className='produ-item' key={index}>
              <div className='produ-name'><Link to={`/profile/productos/${item.id}`}>{item.nombre}</Link></div>
              <img className='produ-image'src={item.url}/>
            </div>       
            ))}
          </div>
          
        <br></br>
        <Piepagina/>
  
    </div>
  )
}

export default Productos;