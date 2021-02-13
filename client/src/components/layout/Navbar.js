import React from 'react';

const Navbar = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hi, <span>Jorge Aguilar</span>! </p>
            <nav className="nav-principal">
                <a href="#!">Logout</a>
            </nav>
        </header> 
    );
}
 
export default Navbar;