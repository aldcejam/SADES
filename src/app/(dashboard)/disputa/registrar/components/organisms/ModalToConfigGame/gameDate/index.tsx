"use client"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { StyledGameDate } from "./styled"

import { PageRegisterStatesModifiers } from '../../../../@core/connection/modifiers';
import { PageRegisterStatesConsumers } from '../../../../@core/connection/consumers';
import { DateProps } from '../../../../@core/entities/IDataForGameRegistration';

const GameDate = () => {

    const { UpdateDate } = PageRegisterStatesModifiers()
    const { date } = PageRegisterStatesConsumers() 

    const handleChange = (newValue: DateProps) => {
        UpdateDate(newValue);
    };


    return (
        <StyledGameDate>
            <p title='configure abaixo a data dos jogos' className="title">Configure a Data:</p>
            <div className="inputs-date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Data"
                            inputFormat="DD/MM/YYYY"
                            value={date}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker
                            label="Horário"
                            value={date}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>

        </StyledGameDate>
    )
}

export default GameDate