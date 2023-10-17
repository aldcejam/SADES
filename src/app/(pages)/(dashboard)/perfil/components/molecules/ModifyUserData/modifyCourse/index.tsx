'use client';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './styled.scss';

type ModifyCourseProps = {
  errors: any;
  register: any;
  course: string[];
};
const ModifyCourse = ({ course, errors, register }: ModifyCourseProps) => {
  return (
    <div>
      <FormControl className="input-material-ui">
        <InputLabel id="demo-simple-select-helper-label">Curso</InputLabel>
        <Select
          {...register('course')}
          label="Curso"
          className="select"
          defaultValue={''}
        >
          {course.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ModifyCourse;
