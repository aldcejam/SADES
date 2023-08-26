import { useAppDispatch } from "app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook";
import { SetCategories } from "../../../entities/DataForBuscarDisputa";

const ResetCatories = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(SetCategories({}));
  };
};

export { ResetCatories };
 