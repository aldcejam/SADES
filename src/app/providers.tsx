import { Store } from "@redux-config/store";
import { Provider } from "react-redux";
import { SidebarStateProvider } from "contexts/SidebarStateContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <Provider store={Store} >
            <SidebarStateProvider>
                {children}
            </SidebarStateProvider>
        </Provider>
    );
}
