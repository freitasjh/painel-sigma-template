import EnderecoModel from "@/model/EnderecoModel";
import UsuarioModel from "@/model/cadastro/UsuarioModel";

export default class FuncionarioModel {
  id;
  razaoSocial;
  nomeFantasia;
  tipoPessoa;
  endereco;
  cpfCnpj;
  usuario;

  constructor() {
    this.endereco = new EnderecoModel();
    this.usuario = new UsuarioModel();
  }
}
