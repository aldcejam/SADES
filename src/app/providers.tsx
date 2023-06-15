"use client"
import { Store } from "@redux-config/store";
import { Provider } from "react-redux";
import { SidebarStateProvider } from "src/contexts/SidebarStateContext";
import { ThemeContextProvider } from "src/contexts/ThemeContext";
import { NextAuthProvider } from "src/providers/nextAuth";

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
