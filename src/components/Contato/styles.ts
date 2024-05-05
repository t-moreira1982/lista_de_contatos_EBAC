import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  tipoContato?: enums.TipoContato
  parametro?: 'tipoContato' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) {
      return variaveis.vermelho
    }
    if (props.prioridade === enums.Prioridade.IMPORTANTE) {
      return variaveis.amarelo2
    }
  } else {
    if (props.tipoContato === enums.TipoContato.FAMILIA) {
      return variaveis.amarelo
    }
    if (props.tipoContato === enums.TipoContato.AMIGOS) {
      return variaveis.verde
    }
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const NomeCompleto = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Email = styled.span`
  font-size: 14px;
`

export const Telefone = styled.span`
  font-size: 14px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  padding: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 16px;
  gap: 2px;
  color: #8b8b8b;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const EditarDados = styled.input`
  margin-right: 8px;
  padding-left: 4px;
  border: 2px solid #8b8b8b;
  border-radius: 5px;

  &:focus {
    border: 2px solid #2f3640;
    background-color: #f1f1f1;
  }
  color: #8b8b8b;
`
export const EditarSeletor = styled.select`
  margin-right: 8px;
  padding-left: 4px;
  border: 2px solid #8b8b8b;
  border-radius: 5px;

  &:focus {
    border: 2px solid #2f3640;
    background-color: #f1f1f1;
  }
  color: #8b8b8b;
`
