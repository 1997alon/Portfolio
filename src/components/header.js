import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header({ activePage, setActivePage }) {
    return (
        <header>
            <div className="header">
                <div className="headerName">
                    <h1 className="headerNameH1">Alon Bar-Din</h1>
                </div>
                <div className="headerButtons">
                    <div className="headerAbout">
                        <Link to="/" onClick={() => setActivePage('about')}>
                            <button className={activePage === 'about' ? 'active' : ''}>About</button>
                        </Link>
                    </div>
                    <div className="headerProjects"> 
                        <Link to="/projects" onClick={() => setActivePage('projects')}>
                            <button className={activePage === 'projects' ? 'active' : ''}>Projects</button>
                        </Link>
                    </div>
                </div>
                <div className="headerContacts">
                    <Link to="/contacts" onClick={() => setActivePage('contacts')}>
                        <button className={activePage === 'contacts' ? 'active' : ''}>Contacts</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
