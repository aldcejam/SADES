import { DataForBuscarDisputaStates } from '../../../entities/DataForBuscarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook';

const ReadCategoriesSelected = () => {
  return useAppSelector(DataForBuscarDisputaStates).categories;
};

export { ReadCategoriesSelected };
