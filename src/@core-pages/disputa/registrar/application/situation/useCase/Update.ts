import { useAppDispatch } from "@redux-config/hook";
import { SetSituation } from "../../../entities/DataForGameRegistration";
import { SituationsProps } from "../../../entities/IDataForGameRegistration";

const UpdateSituation = () => {
  const dispatch = useAppDispatch();

  return (situation: SituationsProps) => {
    dispatch(SetSituation(situation));
  };

};

export { UpdateSituation };
