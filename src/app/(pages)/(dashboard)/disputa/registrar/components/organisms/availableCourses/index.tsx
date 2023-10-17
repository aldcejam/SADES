'use client';
import { PageDisputaRegistrarConnection } from '../../../@core/connection';
import CourseCard from '../../molecules/courseCard';
import styled from './styled.module.scss';

const AvailableCourses = () => {
  const { availableCoursesAndSports, sportAndCourseSelected } =
    PageDisputaRegistrarConnection();
  const { coursesSelected, AddCourse, RemoveCourse } =
    sportAndCourseSelected.selectCourse;
  const { availableCourses } = availableCoursesAndSports;

  const IsCourseSelected = ({ uuid }: { uuid: string }) => {
    const courseAlreadySelected = coursesSelected.find(
      (course) => course.uuid === uuid,
    );

    if (courseAlreadySelected) {
      return true;
    }
    return false;
  };

  const ToggleSelectCourse = ({ uuid }: { uuid: string }) => {
    if (IsCourseSelected({ uuid })) {
      RemoveCourse({ uuid: uuid });
    } else {
      AddCourse({ uuid });
    }
  };

  return (
    <div className={styled['available-teams']}>
      <h2>Times disponíveis</h2>
      <div className={styled['box-teams']}>
        {availableCourses.map((course) => {
          return (
            <span
              onClick={() => ToggleSelectCourse({ uuid: course.uuid })}
              key={course.uuid}
            >
              <CourseCard
                courseLogo={course.logo}
                courseShortName={course.shortName}
                isCardSelected={IsCourseSelected({ uuid: course.uuid })}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableCourses;
