import { Store } from "@redux-config/store";
import { Provider as ProviderRedux } from "react-redux";
import { SidebarStateProvider as ProviderSidebar } from "contexts/SidebarStateContext";
 
export const Providers = ({ children }: { children: React.ReactNode }) => {

    return ( 
        <ProviderRedux store={Store} >
            <ProviderSidebar>
                {children}
            </ProviderSidebar>
        </ProviderRedux>
    );
}
