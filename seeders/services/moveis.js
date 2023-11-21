import api from "../plugins/api";

class MovelService {
  async getAllMoveis() {
    const response = await api.get("/moveis/");
    return response.data;
  }

  async getMoveisById(moveisId) {
    const response = await api.get(`/moveis/${moveisId}/`);
    return response.data;
  }
}

export default new MovelService();
