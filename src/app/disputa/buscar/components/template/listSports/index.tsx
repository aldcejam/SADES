import Title from "../../atoms/title";
import SelectDataBySport, { UpdateSportsProps } from "src/components/organisms/selectDataBySport";
import { memo } from "react";
import { StyledListSports } from "./styled"; 

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    UpdateSport: ({ genderCategories, sportCategories, sportName, sportUUID }: UpdateSportsProps) => void,
    listSports: Array<{ sportName: string }>
}

const ListSports = ({ course, ToggleModal, UpdateSport, listSports }: ListSportsProps) => {

    return (
        <StyledListSports>
            <Title title={course ? course : "nenhum curso selecionado"} />
            <SelectDataBySport
                ToggleModal={ToggleModal}
                UpdateSport={UpdateSport}
                listSports={listSports}
            />
        </StyledListSports>
    )
}
export default memo(ListSports);