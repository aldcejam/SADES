import { ReadSport, UpdateSport } from "./useCase";

const ManageSport = () => {
  return {
    sport: ReadSport(),
    UpdateSport: UpdateSport(), 
  };
};

export { ManageSport };
 