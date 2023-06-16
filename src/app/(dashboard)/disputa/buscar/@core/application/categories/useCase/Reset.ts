import { useAppDispatch } from "@redux-config/hook";
import { SetCategories } from "../../../entities/DataForFindGame";

const ResetCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetCategories({}));
  };
};

export { ResetCatories };
