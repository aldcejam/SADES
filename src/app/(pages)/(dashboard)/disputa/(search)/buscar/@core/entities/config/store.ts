import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import DataForBuscarDisputa from 'app/(pages)/(dashboard)/disputa/(search)/buscar/@core/entities/DataForBuscarDisputa';

export const Store = configureStore({
  reducer: {
    DataForBuscarDisputa: DataForBuscarDisputa,
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
