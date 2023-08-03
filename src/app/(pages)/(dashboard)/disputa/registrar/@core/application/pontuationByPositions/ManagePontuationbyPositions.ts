import { PontuationByPositionsProps } from "../../entities/IDataForRegistrarDisputa"
import { ReadPontuationbyPositions, UpdatePontuationbyPositions, UpdatePositionsCount } from "./useCase"
import { ReadPositionsCount } from "./useCase/Read/ReadPontuationCount"
 
type ManagePontuationbyPositionsReturnProps = {
    pontuationbyPositions: PontuationByPositionsProps
    ReadPositionsCount: number
    UpdatePositionsCount: (positionsCount: number) => void
    UpdatePontuationbyPositions: (pontuationbyPositions: PontuationByPositionsProps) => void

}

const ManagePontuationbyPositions = ():ManagePontuationbyPositionsReturnProps => {
 
    return {
        pontuationbyPositions: ReadPontuationbyPositions(),
        ReadPositionsCount: ReadPositionsCount(),
        UpdatePositionsCount: UpdatePositionsCount(),
        UpdatePontuationbyPositions: UpdatePontuationbyPositions()
    }
}

export { ManagePontuationbyPositions }