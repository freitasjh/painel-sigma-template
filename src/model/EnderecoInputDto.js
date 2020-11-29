export default class EnderecoInputDto {
  constructor(endereco) {
    this.logradouro = endereco.logradouro;
    this.bairro = endereco.bairro;
    this.numero = endereco.numero;
    this.cep = endereco.cep;
    this.complemento = endereco.complemento;
    this.referencia = endereco.referencia;
    this.cidade_codigo = endereco.cidade.id;
  }
}
