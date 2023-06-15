import { ReadSportCategory, UpdateSportCategory } from './useCase' 

const ManageSportCategory = () => {
    return {
        sportCategory: ReadSportCategory(),
        UpdateSportCategory: UpdateSportCategory()
    }
}

export { ManageSportCategory }