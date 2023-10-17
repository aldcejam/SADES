import { DataForRegistrarDisputaStates } from '../../../entities/DataForRegistrarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';

const ReadDate = () => {
  return useAppSelector(DataForRegistrarDisputaStates).date;
};

export { ReadDate };
