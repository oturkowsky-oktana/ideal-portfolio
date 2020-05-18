import React from 'react';
import '../assets/styles/Header.css';
import Logo from '../assets/static/home-logo-financial.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link  to='/'>
                <img className="header-img" src={Logo} alt="logo"/>
            </Link>
            <h1 className="header-title">Financial Advisor</h1>
        </header>
    )
}
export default Header;