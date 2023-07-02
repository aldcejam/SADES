"use client"
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import styled from "./styled.module.scss"
import "./styled.scss"

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
        <div>
            <p title='configure abaixo a data dos jogos' className={styled["title"]}>Configure a Data:</p>
            <div className={styled["inputs-date"]}>
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

        </div>
    )
}

export default GameDate