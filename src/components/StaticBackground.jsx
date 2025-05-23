import { useCallback, useEffect, useState } from "react";
import background1 from '../../src/assets/GECBackground.369835c3b111bdc2a4e8.png'

const StaticBackground = ({ children }) => {
    

    return (
        <div
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundImage : `url(${background1})`,
                backgroundSize: "cover", 
                // backgroundPosition: "center", 
                backgroundRepeat: "no-repeat", // Optional: prevents tiling
                // zIndex: -1,
                top: 0,
                left: 0,
            }}>
        
        </div>

    );
};

export default StaticBackground;
