import { api } from '../services/axios';

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
}

export default new Post();