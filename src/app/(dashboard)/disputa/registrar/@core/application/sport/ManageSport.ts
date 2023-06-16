import { ReadSportSelected, UpdateSportSelected } from "./useCase"

const ManageSport = () => { 

    return {
        sportSelected: ReadSportSelected(),
        UpdateSport: UpdateSportSelected()
    }
}

export { ManageSport }