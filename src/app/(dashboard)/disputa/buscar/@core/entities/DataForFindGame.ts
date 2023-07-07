import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux-config/store";

import {
  IDataForFindGame,
  CategoriesProps,
  SportSelectedProps
} from "./IDataForFindGame";

const initialState: IDataForFindGame = {
  categories: {} as CategoriesProps,
  sportSelected: {} as SportSelectedProps
}

export const DataForFindGameSlice = createSlice({
  name: "DataForFindGameSlice",
  initialState,
  reducers: {
    SetCategories: (state, action: PayloadAction<CategoriesProps>) => {
      state.categories = action.payload;
    },
    SetSportSelected: (state, action: PayloadAction<SportSelectedProps>) => {
      state.sportSelected = action.payload;
    }
  }
});

export const { SetCategories, SetSportSelected } = DataForFindGameSlice.actions;

export const DataForFindGameStates = (state: RootState) =>
  state.DataForFindGame;

export default DataForFindGameSlice.reducer;
