import Title from "../../atoms/title";
import SelectDataBySport, { UpdateSportsProps } from "components/organisms/selectDataBySport";
import { memo } from "react";
import styled from "./styled.module.scss"; 

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    UpdateSport: ({ genderCategories, sportCategories, sportName, sportUUID }: UpdateSportsProps) => void,
    listSports: Array<{ sportName: string }>
}

const ListSports = ({ course, ToggleModal, UpdateSport, listSports }: ListSportsProps) => {

    return (
        <div className={styled["list-sports"]}>
            <Title title={course ? course : "nenhum curso selecionado"} />
            <SelectDataBySport
                ToggleModal={ToggleModal}
                UpdateSport={UpdateSport}
                listSports={listSports}
            />
        </div>
    )
}
export default memo(ListSports);