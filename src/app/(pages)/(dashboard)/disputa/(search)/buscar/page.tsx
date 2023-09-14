"use client"
import { LayoutDashboard } from '../../../layout.dash';
import { ListSports } from './components/template/listSports';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import './styled.scss';
import { Provider as ProviderRedux } from "react-redux";
import { Store } from "./@core/entities/config/store"
import { PageContextProvider } from "./context";
import { useSearchParams } from 'next/navigation';
import { PageDisputaBuscarConnection } from './@core/connection';
import { Client } from './client';

export default function Page() {
 

    return (
        <ProviderRedux store={Store}>
            <PageContextProvider>
                <Client>
                    <LayoutDashboard>
                        <div className={`page-disputa-buscar box-page`}>
                            <ListSports />
                            <ModalSelectCategoriesInserted />
                        </div>
                    </LayoutDashboard>
                </Client>
            </PageContextProvider>
        </ProviderRedux>
    )
}
