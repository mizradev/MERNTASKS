import React from 'react';

const Navbar = () => {
    return ( 
        <header className="app-header">
            <p className="nobre-usuario">Hola <span>Jorge Aguilar</span>! </p>
            <nav className="nav-principal">
                <a href="#!">Cerrar sesion</a>
            </nav>
        </header> 
    );
}
 
export default Navbar;