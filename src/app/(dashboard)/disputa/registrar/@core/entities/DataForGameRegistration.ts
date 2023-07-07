import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { RootState } from "@redux-config/store"

import {
  IDataForGameRegistration,
  CategoriesProps,
  DateProps,
  PontuationByPositionsProps,
  SituationsProps,
  CoursesSelectedProps,
  SportSelectedProps,
} from "./IDataForGameRegistration";

const initialState: IDataForGameRegistration = {
  coursesSelected: [] as CoursesSelectedProps[],
  sportSelected: {} as SportSelectedProps,
  categories: {} as CategoriesProps,
  date: dayjs('2023-08-18T21:11:54').toString(),
  pontuationbyPositions: [30, 20, 10],
  situation: "em andamento",
};

export const DataForGameRegistrationSlice = createSlice({
  name: "DataForGameRegistrationSlice",
  initialState,
  reducers: {
    SetCoursesSelected: (state, action: PayloadAction<Array<CoursesSelectedProps>>) => {
      state.coursesSelected = action.payload;
    },
    SetSportSelected: (state, action: PayloadAction<SportSelectedProps>) => {
      state.sportSelected = action.payload;
    },
    SetCategories: (state, action: PayloadAction<CategoriesProps>) => {
      state.categories = action.payload;
    },
    SetDate: (state, action: PayloadAction<DateProps>) => {
      state.date = action.payload;
    },
    SetPontuationByPositions: (
      state,
      action: PayloadAction<PontuationByPositionsProps>
    ) => {
      state.pontuationbyPositions = action.payload;
    },
    SetSituation: (state, action: PayloadAction<SituationsProps>) => {
      state.situation = action.payload;
    },
  },
});

export const {
  SetCoursesSelected,
  SetSportSelected,
  SetCategories,
  SetDate,
  SetPontuationByPositions,
  SetSituation,
} = DataForGameRegistrationSlice.actions;

export const DataForGameRegistrationStates = (state: RootState) => state.DataForGameRegistration;


export default DataForGameRegistrationSlice.reducer;
