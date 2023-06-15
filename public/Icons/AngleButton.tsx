"use client"
import { useThemeContext } from "../../src/contexts/ThemeContext"

const AngleButtonIcon = () => {
    const { mainColor, secondaryColor } = useThemeContext()

    return (
        <svg className="angle-button-icon" width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8729 17.3323L0.967308 4.42661C0.344882 3.80419 0.344882 2.79508 0.967308 2.17272L2.47254 0.667488C3.0939 0.0461244 4.10095 0.0449286 4.72378 0.664831L14.9999 10.8928L25.2759 0.664831C25.8987 0.0449286 26.9058 0.0461244 27.5272 0.667488L29.0324 2.17272C29.6548 2.79514 29.6548 3.80425 29.0324 4.42661L16.1269 17.3323C15.5044 17.9546 14.4953 17.9546 13.8729 17.3323Z" fill="url(#paint0_linear_1102_129)" />
            <defs>
                <linearGradient id="paint0_linear_1102_129" x1="0.500488" y1="0.200684" x2="16.111" y2="25.9239" gradientUnits="userSpaceOnUse">
                    <stop stop-color={mainColor} />
                    <stop offset="1" stop-color={secondaryColor} />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default AngleButtonIcon