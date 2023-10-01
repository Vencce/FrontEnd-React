import api from "../plugins/api"

class MovelService {
    async getAllMoveis() {
      const response = await api.get('/moveis/')
      return response.data
    }
  }
  
export default new MovelService()