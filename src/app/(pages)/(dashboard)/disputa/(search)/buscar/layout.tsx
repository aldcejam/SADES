"use client"
import { Provider as ProviderRedux } from "react-redux";
import { Store } from "./@core/entities/config/store"
import { PageContextProvider } from "./context";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ProviderRedux store={Store}>
                <PageContextProvider>
                    {children}
                </PageContextProvider>
            </ProviderRedux>
        </>

    );
}
