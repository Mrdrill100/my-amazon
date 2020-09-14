
import React from 'react';
import './Login.css'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className="login__logo" 
            src='images.png'
             />
            </Link>
        </div>
          
    )
}

export default Login
