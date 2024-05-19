export interface Comando {
  comando: String,
  descricao: String,
  exemplo: String
}

export interface Situacao {
  situacao: String,
 comandos: Comando[],
 subsituacoes?: Subsituacao[];

}
export interface Subsituacao extends Omit<Situacao, 'substituicoes'>{
}

export interface Situacoes {
  situacoes: Situacao[]
}