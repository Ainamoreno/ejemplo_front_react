import React from 'react';
import './Login.css'
import { useState } from 'react';
import { loginUser } from '../../services/loginUser';
const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handler = (e) => {
        setUser((objUser) => ({
            ...objUser,
            [e.target.name]: e.target.value
        }));
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(user)
    }

    const logMe = () => {
        loginUser(user)
        .then(res => {
            console.log(res)
        })
    
    }

    return (
        <div className='loginDesign'>
            <div>
                <input type='text' name='email' placeholder='Escriba su email' onChange={(e)=>handler(e)} />
                <input type='text' name='password' placeholder='Escriba su contraseña' onChange={(e)=>handler(e)} />
            </div>
            <div onClick={()=>logMe()}>Login</div>

        </div>
    )
};

export default Login;