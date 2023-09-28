import React, { useState } from "react";
import './login.css'
import { Link } from 'react-router-dom';

const Login = () =>{
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username && password) {
            // Submit the data to the backend for authentication
        } else {
            alert('Both fields are required!');
        }
    };
    
    return(
        <div className="container-login">
            
            <div className="content-login">
                <text className="title-login">LOGIN</text>

                <div className="login-form">
                    <label className="title-input">Email</label>

                    <input 
                        className="input-login"
                        type="text"
                        placeholder="E-mail"
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />

                    <label className="title-input">Senha</label>

                    <input 
                        className="input-login"
                        type="password"
                        placeholder="Senha"
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button onClick={handleLogin} className="btn-login" type="submit"
                        style={{ textDecoration: 'none', color: '#000'}}>
                            ENTRAR
                    </button>

                    <button className="btn-login">
                        <Link style={{ textDecoration: 'none', color: '#000'}} to="/cadastrar">CADASTRAR</Link>
                    </button>
                </div>
                <span className="txt-forgot-password">ESQUECEU SUA SENHA?</span>   
            </div>
        </div>
    )
}

export default Login;