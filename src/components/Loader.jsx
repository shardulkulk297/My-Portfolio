import React, { useEffect, useState } from 'react';
import './Loader.scss'; 
import img from '../assets/images/Portfolio.png'

const Loader = ({isLoading, onAnimationEnd}) => {
    useEffect(() => {
        const loaderElement = document.querySelector('.custom-loader'); 
        if (loaderElement) {
            const handleTransitionEnd = () => {
                if (!isLoading) {
                    onAnimationEnd(); // Notify the parent component
                }
            };
            loaderElement.addEventListener('transitionend', handleTransitionEnd);
    
            return () => {
                loaderElement.removeEventListener('transitionend', handleTransitionEnd);
            };
        }
    }, [isLoading, onAnimationEnd]);
    
    

    return (
        <div className={`custom-loader ${!isLoading ? 'fade-out' : ''}`}>
            <img src={img}  alt="Loading..." />
        </div>
    );
};

export default Loader;
