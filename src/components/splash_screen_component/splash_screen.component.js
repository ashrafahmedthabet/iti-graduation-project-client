import React from 'react';
import logo from "../../imported/images/logoWithNewColor.png"

const SplashScreenComponent = () => {
    return (
        <div className='container content d-flex justify-content-center'>
            <img src={logo} height={100} className='logo-animation'/>
        </div>
    );
}

export default SplashScreenComponent;
