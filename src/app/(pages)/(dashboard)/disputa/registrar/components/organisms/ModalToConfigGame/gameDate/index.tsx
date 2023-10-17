'use client';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import styled from './styled.module.scss';
import './styled.scss';

import { DateProps } from '../../../../@core/entities/IDataForRegistrarDisputa';
import { PageDisputaRegistrarConnection } from '../../../../@core/connection';

const GameDate = () => {
  const { disputeSettings } = PageDisputaRegistrarConnection();
  const { date } = disputeSettings;

  const UpdateDate = date.Update;
  const dateSelected = date.value;

  const handleChange = (newValue: DateProps) => {
    UpdateDate(newValue);
  };

  return (
    <div>
      <p title="configure abaixo a data dos jogos" className={styled['title']}>
        Configure a Data:
      </p>
      <div className={styled['inputs-date']}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Data"
              format="DD/MM/YYYY"
              value={dateSelected}
              onChange={handleChange}
              /* renderInput={(params) => <TextField {...params} />} */
            />
            <TimePicker
              label="Horário"
              value={dateSelected}
              onChange={handleChange}
              /* renderInput={(params) => <TextField {...params} />} */
            />
          </Stack>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default GameDate;
