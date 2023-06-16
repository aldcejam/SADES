import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { RootState } from "@redux-config/store"

import {
  IDataForGameRegistration,
  GenderCategoryProps,
  DateProps,
  PontuationByPositionsProps,
  SportCategoryProps,
  SituationsProps,
  CoursesSelectedProps,
  SportSelectedProps,
} from "./IDataForGameRegistration";

const initialState: IDataForGameRegistration = {
  coursesSelected: [] as CoursesSelectedProps[],
  sportSelected: {} as SportSelectedProps,
  genderCategory: "" as GenderCategoryProps,
  sportCategory: "",
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
    SetCategoryGender: (state, action: PayloadAction<GenderCategoryProps>) => {
      state.genderCategory = action.payload;
    },
    SetSportCategory: (state, action: PayloadAction<SportCategoryProps>) => {
      state.sportCategory = action.payload;
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
  SetCategoryGender,
  SetSportCategory,
  SetDate,
  SetPontuationByPositions,
  SetSituation,
} = DataForGameRegistrationSlice.actions;

export const DataForGameRegistrationStates = (state: RootState) => state.DataForGameRegistration;


export default DataForGameRegistrationSlice.reducer;
