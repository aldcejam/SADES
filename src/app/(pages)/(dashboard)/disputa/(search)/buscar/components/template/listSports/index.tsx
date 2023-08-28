"use client"
import Title from "../../atoms/title";
import SelectDataBySport from "components/organisms/selectDataBySport";
import { memo } from "react";
import styled from "./styled.module.scss";
import { PageDisputaBuscarConnection } from "../../../@core/connection";
import { usePageBuscarDisputa } from "../../../context";
import { useSearchParams } from "next/navigation"

const ListSports = () => {
    
    const searchParams = useSearchParams()
    const curso = searchParams.get('curso')
    if(!curso) return <p>curso não selecionado</p>
 
    const {
        listSport, sportSelected,courseSelected
    } = PageDisputaBuscarConnection()

    courseSelected.Update(curso)

    const { modalSelectCategories } = usePageBuscarDisputa()

    return (
        <div className={styled["list-sports"]}>
            <Title title={curso || "curso não selecionado"} />
            <SelectDataBySport
                ToggleModal={modalSelectCategories.ToggleModal}
                UpdateSportSelected={sportSelected.Update}
                listSports={listSport}
            />
        </div>
    )
}
export default memo(ListSports);