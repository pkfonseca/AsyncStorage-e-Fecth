//importar usuario
//importar api
//importar util
class UsuarioService {
    usuario = new Usuario();
    api = new Api();
    util = new Util();
    body;
    urlBase;
  
    async enviarSenhaAcesso(pEmail) {
      await fetch(this.api.apiBase + 'caminhoQueBrunoMandar', {
        method: 'POST',
        body: pEmail,
      });
    }
  
    async validarSenha(pEmail, pSenha) {
      this.body = {
        telefone: pEmail,
        senha: pSenha,
      };
  
      this.usuario = await fetch(this.api.apiBase + 'CaminhoQueBrunoMandar', {
        method: 'POST',
        body: JSON.stringify(this.body),
      });
  
      this.usuario = await this.usuario.json();
      return this.usuario;
    }
    }
    export default UsuarioService;