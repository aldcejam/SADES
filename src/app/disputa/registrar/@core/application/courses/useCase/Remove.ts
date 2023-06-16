import {
  DataForGameRegistrationStates,
  SetCoursesSelected,
} from "../../../entities/DataForGameRegistration";
import { useAppSelector, useAppDispatch } from "@redux-config/hook";

const RemoveCourseSelected = () => {
  const coursesSelected = useAppSelector(DataForGameRegistrationStates).coursesSelected;
  const dispatch = useAppDispatch();

  return (CoursePARAM: { uuid: string }) => {
    const courseDecremented = coursesSelected.filter(
      (course) => course.uuid !== CoursePARAM.uuid
    );
    const courseAlreadyRemoved = coursesSelected.every((course) =>
      courseDecremented.find((c) => c.uuid === course.uuid)
    );
    if (courseAlreadyRemoved) {
      return;
    }
    dispatch(SetCoursesSelected(courseDecremented));
  };
};

export { RemoveCourseSelected };
