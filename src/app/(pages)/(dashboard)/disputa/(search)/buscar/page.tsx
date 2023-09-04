"use client"
import { useSearchParams } from 'next/navigation';
import { LayoutDashboard } from '../../../layout.dash';
import { PageDisputaBuscarConnection } from './@core/connection';
import { ListSports } from './components/template/listSports';
import { ModalSelectCategoriesInserted } from './components/template/modalSelectCategoriesInserted';
import './styled.scss';
import { useEffect } from 'react';

export default function Page() {

    const { courseSelected,
    } = PageDisputaBuscarConnection()
    
    const searchParams = useSearchParams()
    const curso = searchParams.get('curso')

    if (!curso) return <p>curso não selecionado</p>

    function RemoveAccents(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    useEffect(() => {
        courseSelected.Update(RemoveAccents(curso))
    }, [])

    return (
        <LayoutDashboard>
            <div className={`page-disputa-buscar box-page`}>
                <ListSports />
                <ModalSelectCategoriesInserted />
            </div>
        </LayoutDashboard>
    )
}
