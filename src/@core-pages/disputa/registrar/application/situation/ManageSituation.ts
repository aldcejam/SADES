import { UpdateSituation, ReadSituation} from "./useCase";

const ManageSituation = () => { 

  return {
    situationSelected: ReadSituation(),
    UpdateSituation: UpdateSituation(),
  };
};

export { ManageSituation };
