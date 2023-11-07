import api from "../plugins/api"

class CategoriaService {
    async getAllCategorias() {
      const response = await api.get('/categorias/')
      return response.data
    }
  }
  
export default new CategoriaService()