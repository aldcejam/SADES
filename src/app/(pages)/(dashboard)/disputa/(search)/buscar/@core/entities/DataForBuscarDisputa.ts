import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './config/store';

import {
  IDataForBuscarDisputa,
  CategoriesProps,
  SportSelectedProps,
} from './IDataForBuscarDisputa';

const initialState: IDataForBuscarDisputa = {
  courseSelected: '',
  categories: {} as CategoriesProps,
  sportSelected: {} as SportSelectedProps,
};

export const DataForBuscarDisputaSlice = createSlice({
  name: 'DataForBuscarDisputaSlice',
  initialState,
  reducers: {
    SetCourseSelected: (state, action: PayloadAction<string>) => {
      state.courseSelected = action.payload;
    },
    SetCategories: (state, action: PayloadAction<CategoriesProps>) => {
      state.categories = action.payload;
    },
    SetSportSelected: (state, action: PayloadAction<SportSelectedProps>) => {
      state.sportSelected = action.payload;
    },
  },
});

export const { SetCategories, SetSportSelected, SetCourseSelected } =
  DataForBuscarDisputaSlice.actions;

export const DataForBuscarDisputaStates = (state: RootState) =>
  state.DataForBuscarDisputa;

export default DataForBuscarDisputaSlice.reducer;
