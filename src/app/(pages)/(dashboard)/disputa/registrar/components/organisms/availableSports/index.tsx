'use client';
import SelectSportButton from '../../atoms/selectSportButton';

import styled from './styled.module.scss';
import { PageDisputaRegistrarConnection } from '../../../@core/connection';

const AvailableSports = () => {
  const { availableCoursesAndSports, sportAndCourseSelected } =
    PageDisputaRegistrarConnection();
  const UpdateSport = sportAndCourseSelected.sportSelected.Update;
  const sportSelected = sportAndCourseSelected.sportSelected.value;
  const { availableSports } = availableCoursesAndSports;

  return (
    <div>
      <h2 className={styled['title']}>Escolha o esporte</h2>
      <div className={styled['box-sports']}>
        {availableSports.map((sport) => {
          return (
            <span
              key={sport.sportName}
              onClick={() =>
                UpdateSport({
                  sportName: sport.sportName,
                  sportUUID: sport.uuid,
                  genderCategories: sport.genderCategories,
                  sportCategories: sport.sportCategories,
                  minNumberOfCourses: sport.minNumberOfCourses,
                  maxNumberOfCourses: sport.maxNumberOfCourses,
                })
              }
            >
              <SelectSportButton
                value={sport.sportName}
                isSelected={sport.uuid == sportSelected?.sportUUID}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableSports;
