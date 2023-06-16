import { SetPontuationByPositions } from "../../../../entities/DataForGameRegistration";
import { PontuationByPositionsProps } from "../../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";

const UpdatePontuationbyPositions = () => {
  const dispatch = useAppDispatch();

  return (PontuationbyPositions: PontuationByPositionsProps) => {
    dispatch(SetPontuationByPositions(PontuationbyPositions));
  };
};

export { UpdatePontuationbyPositions };
