import React, { createContext, useState, useContext, useEffect } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const savedBackgroundImage = localStorage.getItem('backgroundImage') || 'ruby';
    const savedBackgroundColor = localStorage.getItem('backgroundColor') || '#F8D1D1';

    const [backgroundImage, setBackgroundImage] = useState(savedBackgroundImage);
    const [backgroundColor, setBackgroundColor] = useState(savedBackgroundColor);

    useEffect(() => {
        localStorage.setItem('backgroundImage', backgroundImage);
        localStorage.setItem('backgroundColor', backgroundColor);
    }, [backgroundImage, backgroundColor]);

    return (
        <BackgroundContext.Provider value={{ backgroundImage, setBackgroundImage, backgroundColor, setBackgroundColor }}>
            {children}
        </BackgroundContext.Provider>
    );
};

export const useBackground = () => useContext(BackgroundContext);