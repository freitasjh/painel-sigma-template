import EnderecoInputDto from "./EnderecoInputDto";

export default class ClienteInputDto {
  constructor(cliente) {
    this.razao_social = cliente.razaoSocial;
    this.nome_fantasia = cliente.nomeFantasia;
    this.tipo_pessoa = cliente.tipoPessoa;
    this.cpf_cnpj = cliente.cpfCnpj;
    this.email = cliente.email;
    this.telefone_1 = cliente.telefone1;
    this.endereco = new EnderecoInputDto(cliente.endereco);
    this.loja_id = "6";
    this.email_nfe = cliente.emailNfe;
  }
}
