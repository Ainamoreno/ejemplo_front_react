import React from 'react';
import './Header.css'
import {useNavigate} from 'react-router-dom';
import logo_front from '../../img/VideoClub.png'

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className='headerDesign'>
            <img className='logo' src={logo_front} alt=''/>
            {/* <div className='headersName'>VIDEO<span className='span'>CLUB</span></div> */}
            <div className='headersName' onClick={() => navigate('/login')}>Login</div>
            <div className='headersName' onClick={() => navigate('/register')}>Register</div>
        </div>
    )
};

export default Header;
