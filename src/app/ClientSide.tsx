"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import { Providers } from './providers';
import { SuapClient } from 'services/Login-Suap/SuapClient';

interface BodyClientSideProps {
    children?: React.ReactNode
}

export const ClientSide = ({ children }: BodyClientSideProps) => { 
    return (
        <Providers>
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
        </Providers>
    )
}