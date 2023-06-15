import { SetSportSelected } from "../../../entities/DataForGameRegistration";
import { SportSelectedProps } from "../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";

const UpdateSportSelected = () => {
  const dispatch = useAppDispatch();

  return (sport: SportSelectedProps) => {
    dispatch(SetSportSelected(sport));
  };
};

export { UpdateSportSelected };
