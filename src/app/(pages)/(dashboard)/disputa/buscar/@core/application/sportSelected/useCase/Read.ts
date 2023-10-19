import { DataForBuscarDisputaStates } from '../../../entities/DataForBuscarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook';

const ReadSportSelected = () => {
  return useAppSelector(DataForBuscarDisputaStates).sportSelected;
};

export { ReadSportSelected };
