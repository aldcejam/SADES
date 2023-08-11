import Image from "next/image"
import styled from "./styled.module.scss"

const ProfilePic = () => {
    return (
        <svg className={styled["profile-pic"]} width="214" height="213" viewBox="0 0 214 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_1432_8772)">
                <path d="M204.61 146.468C191.474 174.016 171.121 193.522 143.553 204.985C115.984 216.447 89.2481 215.616 63.3448 202.489C37.4415 189.362 19.2167 169.856 8.67032 143.972C-1.87603 118.088 -2.80115 91.2796 5.89496 63.5466C14.5911 35.8137 32.8159 16.9553 60.5695 6.97148C88.323 -3.01237 115.336 -2.27282 141.61 9.19012C167.883 20.6531 188.236 39.5114 202.668 65.7653C217.099 92.0191 217.747 118.92 204.61 146.468Z" fill="black" fill-opacity="0.01" />
            </g>
            <path d="M203.256 145.822C190.275 173.045 170.195 192.282 142.977 203.6C115.8 214.9 89.5227 214.073 64.0229 201.151C38.4281 188.18 20.4638 168.942 10.0594 143.406C-0.349695 117.859 -1.27 91.4099 7.32625 63.9954C15.8796 36.7179 33.7574 18.2108 61.0772 8.38293C88.482 -1.47546 115.099 -0.740002 141.01 10.565C166.965 21.8891 187.073 40.5103 201.353 66.4879C215.547 92.3092 216.19 118.701 203.256 145.822Z" stroke="white" stroke-width="3" />
            <defs>
                <filter id="filter0_i_1432_8772" x="0" y="0" width="214" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1432_8772" />
                </filter>
            </defs>
            <Image alt="imagem do usuario" src={'/profile-image.jpg'} fill/>
        </svg>
    )
}

export default ProfilePic