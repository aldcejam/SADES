import { DataForRegistrarDisputaStates } from '../../../../entities/DataForRegistrarDisputa';
import { useAppSelector } from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';

const ReadPontuationbyPositions = () => {
  return useAppSelector(DataForRegistrarDisputaStates).pontuationbyPositions;
};

export { ReadPontuationbyPositions };
