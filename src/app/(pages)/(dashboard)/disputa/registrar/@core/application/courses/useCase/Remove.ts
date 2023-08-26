import {
  DataForRegistrarDisputaStates,
  SetCoursesSelected,
} from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector, useAppDispatch } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";

const RemoveCourseSelected = () => {
  const coursesSelected = useAppSelector(DataForRegistrarDisputaStates).coursesSelected;
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
