 import { PageDisputaBuscarConnection } from "../../../@core/connection";
import { usePageBuscarDisputa } from "../../../context";
import { CardToSelectSport } from "../../molecules/cardToSelectSport";
import "./styled.scss";
import { GetIllustration, availableSportsIllustrationProps } from "./getIllustration";
import { OutrosIllustration } from "../../../illustrations/outros";
import { SportSelectedProps } from "../../../@core/entities/IDataForBuscarDisputa";

const ListSports = () => {

    const { modalSelectCategories } = usePageBuscarDisputa();
    const {
        listSport, sportSelected
    } = PageDisputaBuscarConnection() 

    const handleSelectSport = (sport: SportSelectedProps) => {
        sportSelected.Update(sport)
        modalSelectCategories.ToggleModal()
    }

    function RemoveAccentsAndReplaceSpace(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_");
    }

    const listSportUpdated = listSport.map(sport => {
        return {
            ...sport,
            sportName: RemoveAccentsAndReplaceSpace(sport.sportName),
            sportIllustration: GetIllustration(RemoveAccentsAndReplaceSpace(sport.sportName) as availableSportsIllustrationProps) as JSX.Element
        }
    })

    const availableSportsIllustration: availableSportsIllustrationProps[] = [
        "basquete",
        "futbol",
        "natacao",
        "ping_pong",
        "xadrez",
    ]


    const sportsWithIllustration = listSportUpdated.filter(sport => availableSportsIllustration.includes(sport.sportName as availableSportsIllustrationProps));
    const sportsWithoutIllustration = listSportUpdated.filter(sport => !availableSportsIllustration.includes(sport.sportName as availableSportsIllustrationProps));

    return (
        <div className="list-sports">
            <CardToSelectSport
                sport={"outros"}
                className={`card-outros`}
                onClick={() => { }}
                illustration={<OutrosIllustration className="card-outros__illustration" />}
            />
            {
                sportsWithIllustration.map((sport, index) => {
                    return (
                        <CardToSelectSport
                            sport={sport.sportName}
                            onClick={() => handleSelectSport(sport)}
                            className={`card-${sport.sportName}`}
                            illustration={sport.sportIllustration}
                            key={sport.sportName}
                        />
                    )
                })
            }
        </div>
    )
}
export { ListSports };