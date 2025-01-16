import React, { useEffect, useState } from 'react';
import './Loader.scss'; 
import img from '../assets/images/Portfolio.png'

const Loader = ({isLoading}) => {
    

    return (
        <div className={`custom-loader ${!isLoading ? 'fade-out' : ''}`}>
            <img src={img}  alt="Loading..." />
        </div>
    );
};

export default Loader;
