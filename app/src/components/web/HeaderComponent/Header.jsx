import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/images/logo.jpg';

const Header = () => {
    return (    
        <header className="header">
            <div className='flex items-center justify-center pb-5'>
            <img src={logo} alt="logo paraiso bio" className="rounded-full shadow" />

            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Atalhos</Link>
                    </li>
                    <li>
                        <Link to="/visit">Visitas</Link>
                    </li>
                    <li>
                        <Link to="/apto">Meu imóvel</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;