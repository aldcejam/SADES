import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit'
import DataToSelectCategories from 'src/components/templates/modals/modalSelectCategories/@core/entities/DataToSelectCategories';
import DataForFindGame from 'src/app/(dashboard)/disputa/buscar/@core/entities/DataForFindGame';
import DataForGameRegistration from 'src/app/(dashboard)/disputa/registrar/@core/entities/DataForGameRegistration';
 
export const Store = configureStore({
  reducer: {
    DataForGameRegistration: DataForGameRegistration,
    DataToSelectCategories: DataToSelectCategories,
    DataForFindGame: DataForFindGame,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
