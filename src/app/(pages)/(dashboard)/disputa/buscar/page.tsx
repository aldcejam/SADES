import { cookies } from 'next/headers';
import { LayoutDashboard } from '../../layout.dash';
import { Client } from './client';
import ListSports from './components/template/listSports';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import './styled.scss';

export type ParametersToBuscarDisputaProps = {
    course: string
    sport: string
    genderCategory?: string
    sportCategory?: string
} 

export default function Page() { 

    const cookieStore = cookies()

    const dataForToSearchSTRING = cookieStore.get('ParametersToBuscarDisputa')?.value as string
    const dataForToSearchJSON = JSON.parse(dataForToSearchSTRING) as ParametersToBuscarDisputaProps  


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
