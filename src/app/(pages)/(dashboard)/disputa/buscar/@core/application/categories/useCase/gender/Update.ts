import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook';
import {
  DataForBuscarDisputaStates,
  SetCategories,
} from '../../../../entities/DataForBuscarDisputa';

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(DataForBuscarDisputaStates).categories;

  return (genderCategory: GenderOptionsProps) => {
    dispatch(
      SetCategories({
        ...categories,
        genderCategory: genderCategory,
      }),
    );
  };
};

export { UpdateGenderCategory };
