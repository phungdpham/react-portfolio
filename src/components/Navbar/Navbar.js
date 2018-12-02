import React from 'react';
import './navbar.css';
import NavTabs from './NavTabs';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light transparent">
            <div className="container">
                <a className='navbar-brand' href='/'>
                    <h3 className='brand-name text-info'>PHUNG PHAM</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-btn" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className='collapse navbar-collapse' id='menu-btn'>
                    <div className='navbar-nav'>
                        <NavTabs />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;