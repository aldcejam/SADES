import { Store } from "@redux-config/store";
import { Provider as ProviderRedux } from "react-redux";
import { SidebarStateProvider as ProviderSidebar } from "contexts/SidebarStateContext";
import { SessionProvider } from "next-auth/react"

export const Providers = ({ children }: { children: React.ReactNode }) => {


    return (
        <SessionProvider>
            <ProviderRedux store={Store} >
                <ProviderSidebar>
                    {children}
                </ProviderSidebar>
            </ProviderRedux>
        </SessionProvider>
    );
}
