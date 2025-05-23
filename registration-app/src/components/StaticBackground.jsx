import { useCallback, useEffect, useState } from "react";
import background1 from '../../src/assets/GECBackground.369835c3b111bdc2a4e8.png'

const StaticBackground = ({ children }) => {
    


    // const [background, setBackground] = useState(background);

    // useEffect(() => {
    //     const updateBackground = () => {
    //     const screenWidth = window.innerWidth;
    //     if (screenWidth <= 768) {
    //         setBackground(background);
    //     } else {
    //         setBackground(background);
    //     }
    //     };

    //     updateBackground();
    //     window.addEventListener("resize", updateBackground); 
    // }, []);

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
