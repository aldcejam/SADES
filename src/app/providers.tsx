"use client"
import { Store } from "@redux-config/store";
import { Provider } from "react-redux";
import { SidebarStateProvider } from "contexts/SidebarStateContext";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { NextAuthProvider } from "providers/nextAuth";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={Store}>
            <NextAuthProvider>
                <ThemeContextProvider>
                    <SidebarStateProvider>
                        {children}
                    </SidebarStateProvider>
                </ThemeContextProvider>
            </NextAuthProvider>
        </Provider>
    );
}
