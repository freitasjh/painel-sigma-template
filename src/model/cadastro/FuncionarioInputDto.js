import EnderecoInputDto from "@/model/EnderecoInputDto";
import UsuarioInputDto from "@/model/cadastro/UsuarioInputDto";

export default class FuncionarioInputDto {
  constructor(funcionario) {
    this.id = funcionario.id;
    this.razaoSocial = funcionario.razaoSocial;
    this.nomeFantasia = funcionario.nomeFantasia;
    this.tipoPessoa = funcionario.tipoPessoa;
    this.cpfCnpj = funcionario.cpfCnpj;
    this.tipoFuncionario = funcionario.tipoFuncionario;
    this.telefone1 = funcionario.telefone1;
    this.telefone2 = funcionario.telefone2;
    this.email1 = funcionario.email1;
    this.email2 = funcionario.email2;
    this.tipoFuncionario = funcionario.tipoFuncionario;
    this.endereco = new EnderecoInputDto(funcionario.endereco);
    this.loja_id = funcionario.loja.id;
    this.usuario = new UsuarioInputDto(funcionario.usuario);
  }
}
