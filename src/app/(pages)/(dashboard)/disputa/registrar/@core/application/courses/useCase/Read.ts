import { DataForRegistrarDisputaStates } from '../../../entities/DataForRegistrarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';

const ReadCoursesSelected = () => {
  return useAppSelector(DataForRegistrarDisputaStates).coursesSelected;
};

export { ReadCoursesSelected };
