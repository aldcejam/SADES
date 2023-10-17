import { ReadDate, UpdateDate } from './useCase';

const ManageDate = () => {
  return {
    date: ReadDate(),
    UpdateDate: UpdateDate(),
  };
};

export { ManageDate };
