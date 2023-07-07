import Title from "../../atoms/title";
import SelectDataBySport from "components/organisms/selectDataBySport";
import { SportSelectedProps } from "app/(dashboard)/disputa/buscar/@core/entities/IDataForFindGame"
import { memo } from "react";
import styled from "./styled.module.scss";

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    UpdateSportSelected: ({ genderCategories, sportCategories, sportName, sportUUID }: SportSelectedProps) => void,
    listSports: Array<{ sportName: string }>
}

const ListSports = ({ course, ToggleModal, UpdateSportSelected, listSports }: ListSportsProps) => {

    return (
        <div className={styled["list-sports"]}>
            <Title title={course ? course : "nenhum curso selecionado"} />
            <SelectDataBySport
                ToggleModal={ToggleModal}
                UpdateSportSelected={UpdateSportSelected}
                listSports={listSports}
            />
        </div>
    )
}
export default memo(ListSports);