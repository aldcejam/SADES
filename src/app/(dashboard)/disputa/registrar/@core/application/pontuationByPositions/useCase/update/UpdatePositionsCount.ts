import {
  DataForGameRegistrationStates,
  SetPontuationByPositions,
} from "../../../../entities/DataForGameRegistration";
import { useAppDispatch, useAppSelector } from "@redux-config/hook";

const UpdatePositionsCount = () => {
  const dispatch = useAppDispatch();
  const pontuationByPositions = useAppSelector(DataForGameRegistrationStates).pontuationbyPositions;
  const numberOfCurrentPositions = pontuationByPositions?.length;

  return (newPositionCount: number) => {
    const newNumberOfPositionsEqualToCurrent = newPositionCount === numberOfCurrentPositions
    if (newNumberOfPositionsEqualToCurrent) return;

    const AddPositionsInPontuationByPositions = () => {
      if (newPositionCount > numberOfCurrentPositions) {
        const remainingElementsFilledWith0 = new Array(
          newPositionCount - numberOfCurrentPositions
        ).fill(0);

        const pontuationByPositionsCopy = pontuationByPositions.slice();
        const positionsAndValuesUpdated = pontuationByPositionsCopy.concat(
          remainingElementsFilledWith0
        );

        dispatch(SetPontuationByPositions(positionsAndValuesUpdated));
      }
    };

    const RemovePositionsInPontuationByPositions = () => {
      if (newPositionCount < numberOfCurrentPositions) {
        const pontuationByPositionsCopy = pontuationByPositions.slice();
        const positionsAndValuesUpdated = pontuationByPositionsCopy.splice(0, newPositionCount)

        dispatch(SetPontuationByPositions(positionsAndValuesUpdated));
      }
    };

    AddPositionsInPontuationByPositions();
    RemovePositionsInPontuationByPositions();
  };
};

export { UpdatePositionsCount };
