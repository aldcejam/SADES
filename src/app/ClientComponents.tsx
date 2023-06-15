"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

export const ClientComponents = () => {
    return (
        <>
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
        </>
    )
}