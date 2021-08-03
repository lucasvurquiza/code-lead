import { api, source } from '../services/axios';

class GetListPost {
  async getListPost() {
    return api.get('/careers/', {
      cancelToken: source.token,
    })
    .then(async response => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
      return null;
    })
  }
}

export default new GetListPost();