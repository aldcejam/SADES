import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux-config/store";

import { IDataToSelectCategories, SelectedSportDataProps, SelectedCategoriesProps } from "./IDataToSelectCategories";

const initialState: IDataToSelectCategories = {  
  selectedSportData: undefined as unknown as SelectedSportDataProps, 
  selectedCategories: {} as SelectedCategoriesProps, 
};

export const DataToSelectCategoriesSlice = createSlice({
  name: "DataToSelectCategories",
  initialState,
  reducers: { 
    SetSelectedSportData: (state, action: PayloadAction<SelectedSportDataProps>) => {
      state.selectedSportData = action.payload;
    }, 
    SetSelectedCategories: (state, action: PayloadAction<SelectedCategoriesProps>) => {
      state.selectedCategories = action.payload;
    }, 
  },
});

export const { 
  SetSelectedSportData,
  SetSelectedCategories,  
} = DataToSelectCategoriesSlice.actions;

export const DataToSelectCategoriesStates = (state: RootState) =>
  state.DataToSelectCategories;

export default DataToSelectCategoriesSlice.reducer;
