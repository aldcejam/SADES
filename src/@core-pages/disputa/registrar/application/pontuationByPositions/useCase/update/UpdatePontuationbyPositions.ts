import { SetPontuationByPositions } from "src/@core-pages/disputa/registrar/entities/DataForGameRegistration";
import { PontuationByPositionsProps } from "src/@core-pages/disputa/registrar/entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";

const UpdatePontuationbyPositions = () => {
  const dispatch = useAppDispatch();

  return (PontuationbyPositions: PontuationByPositionsProps) => {
    dispatch(SetPontuationByPositions(PontuationbyPositions));
  };
};

export { UpdatePontuationbyPositions };
