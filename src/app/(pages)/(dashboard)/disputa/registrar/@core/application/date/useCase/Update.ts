import { SetDate } from "../../../entities/DataForRegistrarDisputa";
import { DateProps } from "../../../entities/IDataForRegistrarDisputa";
import { useAppDispatch } from "@redux-config/hook";

const UpdateDate = () => {
  const dispatch = useAppDispatch();

  return (Date: DateProps) => {
    dispatch(SetDate(Date))
  }
}

export { UpdateDate };
