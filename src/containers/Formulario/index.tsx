import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'

import * as enums from '../../utils/enums/Contato'

import { Form, Opcoes, Opcao } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tipoContato, setTipoContato] = useState(enums.TipoContato.FAMILIA)
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone,
        prioridade: enums.Prioridade.NORMAL,
        tipoContato: enums.TipoContato.FAMILIA,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Tipo de Contato</p>
          {Object.values(enums.TipoContato).map((tipoContato) => (
            <Opcao key={tipoContato}>
              <input
                value={tipoContato}
                name="tipoContato"
                type="radio"
                onChange={(evento) =>
                  setTipoContato(evento.target.value as enums.TipoContato)
                }
                id={tipoContato}
                defaultChecked={tipoContato === enums.TipoContato.FAMILIA}
              />{' '}
              <label htmlFor={tipoContato}>{tipoContato}</label>
            </Opcao>
          ))}
        </Opcoes>

        <Campo
          as="textarea"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição do Contato"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
