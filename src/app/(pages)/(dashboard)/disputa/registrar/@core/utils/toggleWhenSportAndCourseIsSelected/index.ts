import { toast } from 'react-toastify';
import { PageDisputaRegistrarConnection } from '../../connection';
import { VerifyIfCoursesAndSportsSelectedCorrectly } from './verification';

interface ToggleModalSelectCategoriesProps {
  state: boolean;
  setState: (state: boolean) => void;
}

const ToggleWhenSportAndCourseIsSelected = ({
  state,
  setState,
}: ToggleModalSelectCategoriesProps) => {
  const { sportAndCourseSelected } = PageDisputaRegistrarConnection();

  const { sportSelected, selectCourse } = sportAndCourseSelected;
  const { coursesSelected } = selectCourse;

  return () => {
    if (state) {
      setState(false);
    } else {
      try {
        VerifyIfCoursesAndSportsSelectedCorrectly({
          coursesSelected,
          sportSelected,
        });
        setState(true);
      } catch (error: any) {
        toast.error(error.message.toString());
      }
    }
  };
};

export { ToggleWhenSportAndCourseIsSelected };
