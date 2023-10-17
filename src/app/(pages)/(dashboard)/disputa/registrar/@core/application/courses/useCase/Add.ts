import { GetCourses } from '../../../api/query/GetCourses';
import {
  DataForRegistrarDisputaStates,
  SetCoursesSelected,
} from '../../../entities/DataForRegistrarDisputa';
import {
  useAppDispatch,
  useAppSelector,
} from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook';

const AddCourseSelected = () => {
  const coursesSelected = useAppSelector(
    DataForRegistrarDisputaStates,
  ).coursesSelected;
  const courses = GetCourses;
  const dispatch = useAppDispatch();

  return (CoursePARAM: { uuid: string }) => {
    const courseAlreadyExist = coursesSelected.find(
      (course) => course.uuid === CoursePARAM.uuid,
    );
    if (courseAlreadyExist) {
      return;
    }

    const getCorrespondingCourse = courses.find(
      (course) => course.uuid === CoursePARAM.uuid,
    );
    if (getCorrespondingCourse) {
      const coursesIncremented = [...coursesSelected, getCorrespondingCourse];
      dispatch(SetCoursesSelected(coursesIncremented));
    }
  };
};

export { AddCourseSelected };
