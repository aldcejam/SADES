import { ReadSportSelected, UpdateSportSelected } from './useCase';

const ManageSportSelected = () => {
  return {
    sportSelected: ReadSportSelected(),
    UpdateSportSelected: UpdateSportSelected(),
  };
};

export { ManageSportSelected };
