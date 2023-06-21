import { useAppDispatch } from "@redux-config/hook";
import { SetSelectedCategories } from "components/templates/modals/modalSelectCategories/@core/entities/DataToSelectCategories";

const ResetSelectedCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetSelectedCategories({}));
  };
};

export { ResetSelectedCatories };
