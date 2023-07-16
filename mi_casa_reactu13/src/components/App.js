
import '../css/App.css';
import {BrowserRouter, Routes , Route } from 'react-router-dom';

import Profile from './Profile';
import Signin from './Signin';
import Productos from './Productos';
import ProductosDetalle from './ProductosDetalle';
import Contactenos from './Contactenos';
import Quienes from './Quienessomos';

function App() {
  
   const token = localStorage.getItem('id');

if(!token){
  return <Signin />
}

return (
  <div className='root'>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Profile />}/>
        <Route path="/profile/productos" element={<Productos />}/>
        <Route path="/profile/productos/:productId" element={<ProductosDetalle />}></Route>
        <Route path="/quienessomos" element={<Quienes />}/>
        <Route path="/contactenos" element={<Contactenos />}/>
      </Routes>
     
    </BrowserRouter>
    
  </div>
  );
}

export default App;
