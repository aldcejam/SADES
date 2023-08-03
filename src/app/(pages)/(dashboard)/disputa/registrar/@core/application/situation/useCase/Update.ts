import { useAppDispatch } from "@redux-config/hook";
import { SetSituation } from "../../../entities/DataForRegistrarDisputa";
import { SituationsProps } from "../../../entities/IDataForRegistrarDisputa";

const UpdateSituation = () => {
  const dispatch = useAppDispatch();

  return (situation: SituationsProps) => {
    dispatch(SetSituation(situation));
  };

};

export { UpdateSituation };
