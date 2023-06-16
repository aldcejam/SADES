import { GetCourses } from "../../../api/query/GetCourses";
import { DataForGameRegistrationStates, SetCoursesSelected } from "../../../entities/DataForGameRegistration";
import { useAppDispatch, useAppSelector } from "@redux-config/hook";


const AddCourseSelected = () => {
  const coursesSelected = useAppSelector(DataForGameRegistrationStates).coursesSelected;
  const courses = GetCourses
  const dispatch = useAppDispatch();

  return (CoursePARAM: { uuid: string }) => {
    const courseAlreadyExist = coursesSelected.find(
      (course) => course.uuid === CoursePARAM.uuid
    );
    if (courseAlreadyExist) {
      return;
    }

    const getCorrespondingCourse = courses.find(
      (course) => course.uuid === CoursePARAM.uuid
    )
    if (getCorrespondingCourse) { 
      const coursesIncremented = [...coursesSelected, getCorrespondingCourse];
      dispatch(SetCoursesSelected(coursesIncremented))
    }
  };

}


export { AddCourseSelected };
