export default class UsuarioInputDto {
  constructor(usuario) {
    this.email = usuario.email;
    this.senha = usuario.senha;
  }
}
