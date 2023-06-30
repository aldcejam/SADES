import { Store } from "@redux-config/store";
import { Provider } from "react-redux";
import { SidebarStateProvider } from "contexts/SidebarStateContext"; 
import { NextAuthProvider } from "providers/nextAuth";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    
    return ( 
        <Provider store={Store} >
            <NextAuthProvider> 
                <SidebarStateProvider>
                    {children}
                </SidebarStateProvider>
            </NextAuthProvider>
        </Provider>
    );
}
