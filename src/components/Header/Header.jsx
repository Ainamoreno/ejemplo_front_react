import React from 'react';
import './Header.css'
import {useNavigate} from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    return(
        <div className='headerDesign'>
            <div className='headersName'>VIDEO<span className='span'>CLUB</span></div>
            <div className='headersName' onClick={() => navigate('/login')}>Login</div>
            <div className='headersName' onClick={() => navigate('/register')}>Register</div>
        </div>
    )
};

export default Header;
