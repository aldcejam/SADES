import { LayoutDashboard } from '../../../layout.dash';
import { Client } from './client';
import ListSports from './components/template/listSports';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import './styled.scss'; 

export default function Page() { 
  
    return (
        <Client>
            <LayoutDashboard
                pageTitle="Pesquisar por jogo"
            >
                <div className={`page-disputa-buscar box-page`}>
                    <ListSports/>
                    <ModalSelectCategoriesInserted />
                </div>
            </LayoutDashboard>
        </Client>
    )
}
