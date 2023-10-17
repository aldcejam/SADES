import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';
import {
  DataForRegistrarDisputaStates,
  SetCategories,
} from '../../../../entities/DataForRegistrarDisputa';

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(DataForRegistrarDisputaStates).categories;

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
