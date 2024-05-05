import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeCompleto.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'tipoContato') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipoContato === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementação =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio == 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como todos ${complementação}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como "${`${criterio}=${valor}`}" ${complementação}`
    }
    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeCompleto}>
            <Contato
              id={c.id}
              descricao={c.descricao}
              email={c.email}
              nomeCompleto={c.nomeCompleto}
              prioridade={c.prioridade}
              telefone={c.telefone}
              tipoContato={c.tipoContato}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
