import { DataForRegistrarDisputaStates } from '../../../entities/DataForRegistrarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';

const ReadCategoriesSelected = () => {
  return useAppSelector(DataForRegistrarDisputaStates).categories;
};

export { ReadCategoriesSelected };
