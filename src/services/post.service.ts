import axios, { AxiosResponse } from 'axios';
import { EXTERNAL_API } from '../config/config';
import { Post } from '../interfaces/post.interface';

class PostService {
  public urlExternalApi: string;
  constructor() {
    this.urlExternalApi = `${EXTERNAL_API}posts` ?? 'https://jsonplaceholder.typicode.com/post';
  }

  // TODO: Manejar errores
  public async getAllPosts(): Promise<Post[]> {
    const { data }: AxiosResponse = await axios.get<Post[]>(this.urlExternalApi);
    const posts: Post[] = data;
    return posts;
  }

  // TODO: Manejar errores
  public async getPostById(id: string): Promise<Post> {
    const { data }: AxiosResponse = await axios.get<Post>(`${this.urlExternalApi}/${id}`);
    const post: Post = data;
    return post;
  }

  public async updatePost(id: number, bodyData: any) {
    try {
      const { title, body } = bodyData;
      const { data }: AxiosResponse<Post> = await axios.put<Post>(`${this.urlExternalApi}/${id}`, {
        ...(body && { body }),
        ...(title && { title }),
      });
      const post: Post = data;
      return post;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async deletePost(id: string): Promise<Partial<Post> | undefined> {
    try {
      const { data, status }: AxiosResponse = await axios.delete(`${this.urlExternalApi}/${id}`);
      const post: Post = data;
      if (status === 200) {
        return { id: Number(id) };
      }
      return post;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  // TODO: Manejar errores
  public async createPost(bodyData: any) {
    const { title, body } = bodyData;

    const response: AxiosResponse = await axios.post(`${this.urlExternalApi}`, {
      title,
      body,
    });
    return response.data;
  }
}

export default PostService;
