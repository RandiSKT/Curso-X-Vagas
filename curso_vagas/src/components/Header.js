// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div>
        <h1>Curso de Ciência da Informação - UFSC 2023</h1>
        <p>Disciplina: CIN7206 - Fontes Gerais de Informação</p>
        <p>Autores: Marco e Fernando</p>
      </div>
      <nav className="navbar">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Upload CV</Link></li>
          <li className={location.pathname === '/job-areas' ? 'active' : ''}><Link to="/job-areas">Job Areas</Link></li>
          <li className={location.pathname === '/job-listings' ? 'active' : ''}><Link to="/job-listings">Job Listings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
