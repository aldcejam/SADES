import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux-config/store";

import {
  IDataForBuscarDisputa,
  CategoriesProps,
  SportSelectedProps
} from "./IDataForBuscarDisputa";

const initialState: IDataForBuscarDisputa = {
  categories: {} as CategoriesProps,
  sportSelected: {} as SportSelectedProps
}

export const DataForBuscarDisputaSlice = createSlice({
  name: "DataForBuscarDisputaSlice",
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

export const { SetCategories, SetSportSelected } = DataForBuscarDisputaSlice.actions;

export const DataForBuscarDisputaStates = (state: RootState) =>
  state.DataForBuscarDisputa;

export default DataForBuscarDisputaSlice.reducer;
