import { Fetch } from './fetcher';

class Api {
  async getMenu() {
    const response = await Fetch.get('/', {});
    return response;
  }

  async deleteRecipe(id) {
    const response = await Fetch.delete(`/${id}`, {});
    return response;
  }

  async createRecipe(body) {
    const response = await Fetch.post('/', {
      body: JSON.stringify(body),
    });
    return response;
  }

  async updateRecipe(id, body) {
    const response = await Fetch.put(`/${id}`, {
      body: JSON.stringify(body),
    });
    return response;
  }
}

export const api = new Api();
