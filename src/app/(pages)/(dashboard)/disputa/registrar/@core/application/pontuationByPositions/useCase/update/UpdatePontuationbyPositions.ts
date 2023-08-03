import { SetPontuationByPositions } from "../../../../entities/DataForRegistrarDisputa";
import { PontuationByPositionsProps } from "../../../../entities/IDataForRegistrarDisputa";
import { useAppDispatch } from "@redux-config/hook";

const UpdatePontuationbyPositions = () => {
  const dispatch = useAppDispatch();

  return (PontuationbyPositions: PontuationByPositionsProps) => {
    dispatch(SetPontuationByPositions(PontuationbyPositions));
  };
};

export { UpdatePontuationbyPositions };
