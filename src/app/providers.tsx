import { SidebarStateProvider as ProviderSidebar } from "contexts/SidebarStateContext";
import { SessionProvider } from "next-auth/react"

export const Providers = ({ children }: { children: React.ReactNode }) => {


    return (
        <SessionProvider> 
            <ProviderSidebar>
                {children}
            </ProviderSidebar>
        </SessionProvider>
    );
}
