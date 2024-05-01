export interface Comando {
  comando: String,
  descricao: String,
  exemplo: String
}

export interface Secao {
 secao: String,
 comandos: Comando[]
}

export interface Geral {
  comandos_docker: Secao[]
}