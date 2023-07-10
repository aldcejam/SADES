"use client"
import { useThemeContext } from "../../../src/contexts/ThemeContext";

const CurverBorder = () => {
    return (
        <svg className="curver-border-polygon" width="199" height="149" viewBox="0 0 199 169" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_556_473)">
                <path d="M0 169H174L69.3935 142.011C53.336 137.868 40.3774 126.033 34.7988 110.416L0 13V169Z" fill="url(#paint0_linear_556_473)" />
            </g>
            <defs>
                <filter id="filter0_d_556_473" x="-15" y="-12" width="214" height="196" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="-5" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.262745 0 0 0 0 0.721569 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_556_473" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_556_473" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_556_473" x1="0" y1="13" x2="155.074" y2="185.968" gradientUnits="userSpaceOnUse">
                    <stop style={{ stopColor: "var(--primary)" }} />
                    <stop offset="1" style={{ stopColor: "var(--secondary)" }} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CurverBorder;
