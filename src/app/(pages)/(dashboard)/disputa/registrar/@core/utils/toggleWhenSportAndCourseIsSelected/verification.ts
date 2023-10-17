import {
  CoursesSelectedProps,
  SportSelectedProps,
} from '../../entities/IDataForRegistrarDisputa';

interface VerifyIfCoursesAndSportsSelectedCorrectlyProps {
  coursesSelected: CoursesSelectedProps[];
  sportSelected: {
    value: SportSelectedProps;
    Update: (sportSelected: SportSelectedProps) => void;
  };
}

const VerifyIfCoursesAndSportsSelectedCorrectly = ({
  coursesSelected,
  sportSelected,
}: VerifyIfCoursesAndSportsSelectedCorrectlyProps) => {
  const coursesNotSelected = coursesSelected.length == 0;
  const sportNotSelected = Object.keys(sportSelected.value).length == 0;
  const insufficientCourses =
    coursesSelected?.length < sportSelected?.value.minNumberOfCourses;
  const excessCourses =
    coursesSelected?.length > sportSelected?.value.maxNumberOfCourses;

  if (coursesNotSelected) {
    throw new Error('cursos não selecionados');
  }
  if (sportNotSelected) {
    throw new Error('esporte não selecionado');
  }
  if (insufficientCourses && !sportNotSelected) {
    throw new Error(
      `quantidade de cusos insuficientes, selecione no mínimo ${sportSelected.value.minNumberOfCourses} cursos`,
    );
  }
  if (excessCourses) {
    throw new Error(
      `quantidade de cusos excedida, selecione no máximo ${sportSelected.value.maxNumberOfCourses} cursos`,
    );
  }
};

export { VerifyIfCoursesAndSportsSelectedCorrectly };
