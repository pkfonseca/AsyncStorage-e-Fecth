//import component
//import assyncStorage
//import API

class Util extends Component {
    api = new Api();
    retorno;
    retornoJson;

    async salvarAsyncStorage(pCampo, pValor) {
        await AsyncStorage.setItem(pCampo, JSON.stringify(pValor));
        console.log(pValor);
        console.log(`${pCampo} salvo com sucesso!`);
      }

      async buscarAsyncStorage(pCampo) {
        this.retorno = await AsyncStorage.getItem(pCampo);
        this.retornoJson = await JSON.parse(this.retorno);
        console.log(`${pCampo} buscado com sucesso!`);
        console.log(this.retornoJson);
        return this.retornoJson;
      }

      async removerAsyncStorage(pCampo) {
        try {
            await AsyncStorage.removeItem(pCampo);
            console.log(`${pCampo} removido com sucesso!`)
            return true;
        }
        catch(error) {
            console.log(error);
            return false;
        }
    }


}

export default Util;