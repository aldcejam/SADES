"use client"
import { useThemeContext } from "../../src/contexts/ThemeContext";

const DimontPolygon = () => {
    const { mainColor, secondaryColor } = useThemeContext();

    return (
        <svg className="dimont-polygon" width="550" height="461" viewBox="0 0 550 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M377 0L864 230.5L377 461L-110 230.5L377 0Z" fill="url(#paint0_linear_678_199)" />
            <defs>
                <linearGradient id="paint0_linear_678_199" x1="-110" y1="230.5" x2="864" y2="230.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color={mainColor} />
                    <stop offset="0.3" stop-color={mainColor} />
                    <stop offset="1" stop-color={secondaryColor} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default DimontPolygon;
