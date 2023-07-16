import React from 'react'
import '../css/Profile.css';
import Barramenu from './Barramenu';
import Textoinicio from './Textoinicio';
import Carrusel from './Carrusel';
import Piepagina from './Piepagina';


function Profile(){

    
    
    return (
        <div className='root'>
            
        <Barramenu/>
        <Carrusel/>
        <Textoinicio/>
        <Piepagina/>
        </div>
    );
}

export default Profile