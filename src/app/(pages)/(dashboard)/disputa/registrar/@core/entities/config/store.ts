import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import DataForRegistrarDisputa from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/DataForRegistrarDisputa';

export const Store = configureStore({
  reducer: {
    DataForRegistrarDisputa: DataForRegistrarDisputa,
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
