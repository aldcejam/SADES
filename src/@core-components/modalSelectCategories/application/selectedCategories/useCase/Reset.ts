import { useAppDispatch } from "@redux-config/hook";
import { SetSelectedCategories } from "src/@core-components/modalSelectCategories/entities/DataToSelectCategories";

const ResetSelectedCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetSelectedCategories({}));
  };
};

export { ResetSelectedCatories };
