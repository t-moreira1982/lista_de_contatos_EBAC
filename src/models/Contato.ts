import * as enums from '../utils/enums/Contato'

class Contato {
  nomeCompleto: string
  email: string
  telefone: string
  prioridade: enums.Prioridade
  tipoContato: enums.TipoContato
  descricao: string
  id: number

  constructor(
    nomeCompleto: string,
    email: string,
    telefone: string,
    prioridade: enums.Prioridade,
    tipoContato: enums.TipoContato,
    descricao: string,
    id: number
  ) {
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.prioridade = prioridade
    this.tipoContato = tipoContato
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
