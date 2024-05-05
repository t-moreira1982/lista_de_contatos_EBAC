import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as enums from '../../utils/enums/Contato'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros?: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />

            <S.Filtros>
              <FiltroCard
                valor={enums.TipoContato.FAMILIA}
                criterio="tipoContato"
                legenda="família"
              />
              <FiltroCard
                valor={enums.TipoContato.AMIGOS}
                criterio="tipoContato"
                legenda="amigos"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importante"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgente"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à Lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
