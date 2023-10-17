import { CourseSelectedProps } from '../../../entities/IDataForBuscarDisputa';
import { useAppDispatch } from 'app/(pages)/(dashboard)/disputa/(search)/buscar/@core/entities/config/hook';
import { SetCourseSelected } from '../../../entities/DataForBuscarDisputa';

const UpdateCourseSelected = () => {
  const dispatch = useAppDispatch();
  return (courseSelected: CourseSelectedProps) => {
    dispatch(SetCourseSelected(courseSelected));
  };
};

export { UpdateCourseSelected };
