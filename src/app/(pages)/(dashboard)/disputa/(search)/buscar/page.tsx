import { cookies } from 'next/headers';
import { LayoutDashboard } from '../../../layout.dash';
import { Client } from './client';
import ListSports from './components/template/listSports';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import './styled.scss';
import { SearchParametersForDisputesProps } from '../SearchParametersForDisputes';
 

export default async function Page() { 

    const cookieStore = cookies()

    const dataForToSearchSTRING = await cookieStore.get('SearchParametersForDisputes')?.value as string
    if(!dataForToSearchSTRING){
        return <div>Erro ao carregar a página</div>
    }
    
    const dataForToSearchJSON = JSON.parse(dataForToSearchSTRING) as SearchParametersForDisputesProps   

    return (
        <Client>
            <LayoutDashboard
                pageTitle="Pesquisar por jogo"
            >
                <div className={`page-disputa-buscar box-page`}>
                    <ListSports
                        course={dataForToSearchJSON.course}
                    />
                    <ModalSelectCategoriesInserted />
                </div>
            </LayoutDashboard>
        </Client>
    )
}
