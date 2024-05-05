import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Prioridade, TipoContato } from '../../utils/enums/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  descricao: descricaoOriginal,
  email: emailOriginal,
  prioridade: prioridadeOriginal,
  tipoContato: tipoContatoOriginal,
  nomeCompleto: nomeCompletoOriginal,
  telefone: telefoneOrginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState(nomeCompletoOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOrginal)
  const [descricao, setDescricao] = useState('')

  const [tipoContato, setTipoContato] =
    useState<TipoContato>(tipoContatoOriginal)
  const [prioridade, setPrioridade] = useState<Prioridade>(prioridadeOriginal)

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setNomeCompleto(nomeCompletoOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOrginal)
      setPrioridade(prioridadeOriginal)
      setTipoContato(tipoContatoOriginal)
      setDescricao(descricaoOriginal)
    }
  }, [
    descricaoOriginal,
    nomeCompletoOriginal,
    emailOriginal,
    telefoneOrginal,
    prioridadeOriginal,
    tipoContatoOriginal
  ])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOrginal)
    setDescricao(descricaoOriginal)
    setPrioridade(prioridadeOriginal)
    setTipoContato(tipoContatoOriginal)
  }

  return (
    <S.Card>
      <S.NomeCompleto>{nomeCompleto}</S.NomeCompleto>
      <S.Dados>
        <S.Email>{email}</S.Email>
        <S.Telefone>{telefone}</S.Telefone>
      </S.Dados>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="tipoContato" tipoContato={tipoContato}>
        {tipoContato}
      </S.Tag>
      {estaEditando ? (
        <>
          <S.EditarDados
            type="text"
            value={nomeCompleto}
            onChange={(evento) => setNomeCompleto(evento.target.value)}
          />
          <S.EditarDados
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <S.EditarDados
            type="text"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
          />
          <S.EditarSeletor
            value={prioridade}
            onChange={(evento) =>
              setPrioridade(evento.target.value as Prioridade)
            }
          >
            {Object.values(Prioridade).map((valor) => (
              <option key={valor} value={valor}>
                {valor}
              </option>
            ))}
          </S.EditarSeletor>
          <S.EditarSeletor
            value={tipoContato}
            onChange={(evento) =>
              setTipoContato(evento.target.value as TipoContato)
            }
          >
            {Object.values(TipoContato).map((valor) => (
              <option key={valor} value={valor}>
                {valor}
              </option>
            ))}
          </S.EditarSeletor>
          <S.Descricao
            disabled={!estaEditando}
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
          />
        </>
      ) : (
        <S.Descricao
          disabled={!estaEditando}
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    descricao,
                    email,
                    nomeCompleto,
                    prioridade,
                    telefone,
                    tipoContato
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
