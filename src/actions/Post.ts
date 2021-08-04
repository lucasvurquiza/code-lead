import { api, source } from '../services/axios';

type PostType = {
  userName: string;
  title: string;
  content: string;
};

class Post {
  async createPost({
    userName,
    title,
    content,
  }: PostType) {
    api.post('/careers/', {
      username: userName,
      title,
      content
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      return null;
    })
  }

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

  async deletePost(idPost: number) {
    return api.delete(`/careers/${idPost}/`, {})
      .then(async () => {
        console.log('Apagado com sucesso');
      })
      .catch(() => {
        return null;
      });
  }
}

export default new Post();