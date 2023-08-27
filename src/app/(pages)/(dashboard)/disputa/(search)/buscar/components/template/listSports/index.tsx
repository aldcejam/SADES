"use client"
import Title from "../../atoms/title";
import SelectDataBySport from "components/organisms/selectDataBySport";
import { memo } from "react";
import styled from "./styled.module.scss";
import { PageDisputaBuscarConnection } from "../../../@core/connection";
import { usePageBuscarDisputa } from "../../../context";

interface ListSportsProps {
    course: string
}
const ListSports = ({ course }: ListSportsProps) => {
 
    const {
        listSport, sportSelected
    } = PageDisputaBuscarConnection()

    const { modalSelectCategories } = usePageBuscarDisputa()

    return (
        <div className={styled["list-sports"]}>
            <Title title={course} />
            <SelectDataBySport
                ToggleModal={modalSelectCategories.ToggleModal}
                UpdateSportSelected={sportSelected.Update}
                listSports={listSport}
            />
        </div>
    )
}
export default memo(ListSports);