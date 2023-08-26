import { Provider as ProviderRedux } from "react-redux";
import { Store } from "./@core/entities/config/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProviderRedux store={Store}>
            {children}
        </ProviderRedux>
    )
}

export { Providers }