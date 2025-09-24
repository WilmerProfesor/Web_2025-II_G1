import React from 'react';
import './Header.css';
import iconHeader from '../../assets/iconHeader2.png';

const Header = () => {
  return (
    <header>        
        <img src={iconHeader} alt="Icono de Cabecera" />        
        <p>NEWS - TEST V1</p>
    </header>
  )
}

export default Header