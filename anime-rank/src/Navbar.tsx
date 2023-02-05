import './App.scss'
import React from 'react'
import './Nav.scss'

interface NavBarProps {
    title: string;
  }

const NavBar: React.FunctionComponent<NavBarProps> = ({ title }) => 
    <div className="nav-title">{title}</div>
export default NavBar;
