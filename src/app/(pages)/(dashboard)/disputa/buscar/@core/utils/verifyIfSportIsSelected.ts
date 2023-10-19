import { SportSelectedProps } from '../entities/IDataForBuscarDisputa';

interface VerifyIfSportIsSelectedProps {
  sportSelected: SportSelectedProps;
}
export const VerifyIfSportIsSelected = ({
  sportSelected,
}: VerifyIfSportIsSelectedProps) => {
  if (Object.keys(sportSelected).length === 0) {
    return new Error('Esporte não selecionado');
  }
};
