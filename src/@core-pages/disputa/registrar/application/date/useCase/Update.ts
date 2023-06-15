import { SetDate } from "../../../entities/DataForGameRegistration";
import { DateProps } from "../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";

const UpdateDate = () => {
  const dispatch = useAppDispatch();

  return (Date: DateProps) => {
    dispatch(SetDate(Date))
  }
}

export { UpdateDate };
