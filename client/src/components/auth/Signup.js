import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    const [ user, userSave ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',

    });

    const { name, email, password, confirm } = user;

    const onChange = e => {
        userSave({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
    <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Signup</h1>
            <form onSubmit={onSubmit}>
                <div className="campo-form">
                    <label htmlFor="name" >Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre"
                    value={name}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="email" placeholder="Tu email"
                    value={email}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" name="password" placeholder="Tu contraseña"
                    value={password}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <label htmlFor="confirm" >Confirmar Password</label>
                    <input type="password" id="confirm" name="confirm" placeholder="Confirme su contraseña"
                    value={confirm}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Registrarse" />   
                </div>
            </form>
            <Link to={'/'} className="enlace-cuenta">
                Iniciar sesión
            </Link>
        </div>
    </div>);
}
 
export default Signup;