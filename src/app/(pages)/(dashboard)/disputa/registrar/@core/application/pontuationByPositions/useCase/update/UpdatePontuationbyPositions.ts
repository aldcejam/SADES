import { SetPontuationByPositions } from "../../../../entities/DataForRegistrarDisputa";
import { PontuationByPositionsProps } from "../../../../entities/IDataForRegistrarDisputa";
import { useAppDispatch } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";

const UpdatePontuationbyPositions = () => {
  const dispatch = useAppDispatch();

  return (PontuationbyPositions: PontuationByPositionsProps) => {
    dispatch(SetPontuationByPositions(PontuationbyPositions));
  };
};

export { UpdatePontuationbyPositions };
