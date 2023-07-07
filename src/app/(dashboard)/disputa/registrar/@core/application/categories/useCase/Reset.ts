import { useAppDispatch } from "@redux-config/hook";
import { SetCategories } from "../../../entities/DataForGameRegistration";

const ResetCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetCategories({}));
  };
};

export { ResetCatories };
 