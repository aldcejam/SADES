import { toast } from "react-toastify";
import { IDataForGameRegistration } from "../../entities/IDataForGameRegistration";

type SubmitOpenSelectCategorysProps = {
    dataForRegistration: IDataForGameRegistration;
    OpenStartModal: () => void;
}

const minCourses = 2;

const SubmitOpenSelectCategorys = ({dataForRegistration, OpenStartModal}:SubmitOpenSelectCategorysProps) => {
  /* if (dataForRegistration.teams.length > minCourses) {
    if (dataForRegistration.sport.sportName !== "") {
      if (
        dataForRegistration.sport.MinNumberOfTeams <=
        dataForRegistration.teams.length - 1
      ) {
        if (
          dataForRegistration.sport.MaxNumberOfTeams >=
          dataForRegistration.teams.length - 1
        ) {
            OpenStartModal();
        } else {
          toast.error(
            "Número de equipes maior que o necessário, por favor, desselecione alguma equipe"
          );
        }
      } else {
        toast.error("Número de equipes menor que o necessário");
      }
    } else {
      toast.error("Selecione um esporte para continuar");
    }
  } else {
    toast.error("Selecione mais de um curso para continuar");
  } */
};

export { SubmitOpenSelectCategorys }
