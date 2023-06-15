import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux-config/store";

import {
  IDataForFindGame,
  CategoriesProps,
  SportProps
} from "./IDataForFindGame";

const initialState: IDataForFindGame = {
  categories: {} as CategoriesProps,
  sport: {} as SportProps
}

export const DataForFindGameSlice = createSlice({
  name: "DataForFindGameSlice",
  initialState,
  reducers: {
    SetCategories: (state, action: PayloadAction<CategoriesProps>) => {
      state.categories = action.payload;
    },
    SetSport: (state, action: PayloadAction<SportProps>) => {
      state.sport = action.payload;
    }
  }
});

export const { SetCategories,SetSport } = DataForFindGameSlice.actions;

export const DataForFindGameStates = (state: RootState) =>
  state.DataForFindGame;

export default DataForFindGameSlice.reducer;
