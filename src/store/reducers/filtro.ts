import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'tipoContato' | 'todos'
  valor?: enums.Prioridade | enums.TipoContato
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = FiltroSlice.actions
export default FiltroSlice.reducer
