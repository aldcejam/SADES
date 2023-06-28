"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import { GetInitialTheme } from 'themes/GetInitialTheme'; 

interface BodyClientSideProps {
    children?: React.ReactNode
}

export const BodyClientSide = ({ children }: BodyClientSideProps) => { 

    return (
        <body className={GetInitialTheme() === "light" ? "light" : "dark"}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {children}
        </body>
    )
}