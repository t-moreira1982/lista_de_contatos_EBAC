import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'João José',
      email: 'joaojose@email.com',
      telefone: '11974314415',
      prioridade: enums.Prioridade.IMPORTANTE,
      tipoContato: enums.TipoContato.FAMILIA,
      descricao: 'Pessoa Importante'
    },
    {
      id: 2,
      nomeCompleto: 'Andrelina José',
      email: 'andrelina@email.com',
      telefone: '11974786594',
      prioridade: enums.Prioridade.URGENTE,
      tipoContato: enums.TipoContato.FAMILIA,
      descricao: 'Pessoa Importante também'
    },
    {
      id: 3,
      nomeCompleto: 'Carlos Eduardo',
      email: 'carlos@email.com',
      telefone: '11974314413',
      prioridade: enums.Prioridade.NORMAL,
      tipoContato: enums.TipoContato.AMIGOS,
      descricao: 'Amigo de infância'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLowerCase() ===
          action.payload.nomeCompleto.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato já cadastrado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
