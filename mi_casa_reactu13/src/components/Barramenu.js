import React from 'react'
import '../css/Profile.css';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../assets/logo.png';
import {Link } from 'react-router-dom';

function Barramenu(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ menu , setMenu ] = useState( false )
    const open = Boolean(anchorEl);
    const username = JSON.parse(localStorage.getItem('username'));
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    const nombre = JSON.parse(localStorage.getItem('nombre'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("avatar");

        window.location.href ="/";

    };
    const toggleMenu = () => {
        setMenu( !menu )
    };
    
    return (
        <div >
            <header className="Cabecera">
               
                    <div className="Cabecera-h1">
                        <img className='logo'src={logo} width='60px' />
                        <div className='Cabecera-h1'>
                            Perfil: {username}
                        </div>
                    </div>   
                    <button 
            onClick={ toggleMenu }
                className="Cabecera-button">
                <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
        </button>
                        <nav className={`Cabecera-nav ${ menu ? 'isActive' : '' }` }>
                            <ul className="Cabecera-ul">
                                <li><Link  to='/' >Inicio</Link></li>
                                <li><Link  to='/profile/productos' >Productos</Link></li>
                                <li><Link  to='/quienessomos' >Quienes Somos</Link></li>
                                <li><Link  to='/contactenos' >Contáctenos</Link></li>
                                <li><IconButton onClick={handleMenu} color="inherit">
                                    <img src={avatar} className="Avatar1"/>
                                    </IconButton>
                                    <Menu 
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                    <MenuItem onClick={handleLogout}> Logout </MenuItem>
                                    </Menu></li>
                                
                            </ul>

                        </nav>
                    
                       
            </header> 
        </div>
    );
}

export default Barramenu;
