import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { RootState } from "@redux-config/store"

import {
  IDataForRegistrarDisputa,
  CategoriesProps,
  DateProps,
  PontuationByPositionsProps,
  SituationsProps,
  CoursesSelectedProps,
  SportSelectedProps,
} from "./IDataForRegistrarDisputa";

const initialState: IDataForRegistrarDisputa = {
  coursesSelected: [] as CoursesSelectedProps[],
  sportSelected: {} as SportSelectedProps,
  categories: {} as CategoriesProps,
  date: dayjs('2023-08-18T21:11:54').toString(),
  pontuationbyPositions: [30, 20, 10],
  situation: "em_andamento",
};

export const DataForRegistrarDisputaSlice = createSlice({
  name: "DataForRegistrarDisputaSlice",
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
} = DataForRegistrarDisputaSlice.actions;

export const DataForRegistrarDisputaStates = (state: RootState) => state.DataForRegistrarDisputa;


export default DataForRegistrarDisputaSlice.reducer;
