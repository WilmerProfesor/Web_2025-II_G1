import React from 'react'
import './Header.css'
import logo from '../../assets/logo_dragonballapi.webp'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo DBZ" id='logoPpal'/>
        <h1>API Dragon Ball Z</h1>
    </header>
  )
}

export default Header