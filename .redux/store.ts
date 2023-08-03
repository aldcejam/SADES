import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit' 
import DataForBuscarDisputa from 'app/(pages)/(dashboard)/disputa/buscar/@core/entities/DataForBuscarDisputa';
import DataForRegistrarDisputa from 'app/(pages)/(dashboard)/disputa/registrar/@core/entities/DataForRegistrarDisputa';
 
export const Store = configureStore({
  reducer: {
    DataForRegistrarDisputa: DataForRegistrarDisputa, 
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
