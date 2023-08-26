import { useAppDispatch } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";
import { SetCategories } from "../../../entities/DataForRegistrarDisputa";

const ResetCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetCategories({}));
  };
};

export { ResetCatories };
 