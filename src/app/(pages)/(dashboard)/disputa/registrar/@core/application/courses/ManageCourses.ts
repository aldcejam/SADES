import {
  ReadCoursesSelected,
  AddCourseSelected,
  RemoveCourseSelected,
} from './useCase';

const ManageCourses = () => {
  return {
    coursesSelected: ReadCoursesSelected(),
    AddCourse: AddCourseSelected(),
    RemoveCourse: RemoveCourseSelected(),
  };
};

export { ManageCourses };
