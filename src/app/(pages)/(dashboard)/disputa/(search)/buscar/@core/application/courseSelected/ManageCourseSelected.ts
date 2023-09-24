import { ReadCourseSelected, UpdateCourseSelected } from "./useCase";

const ManageCourseSelected = () => {
  return {
    courseSelected: ReadCourseSelected(),
    UpdateCourseSelected: UpdateCourseSelected(),
  };
};

export { ManageCourseSelected };
