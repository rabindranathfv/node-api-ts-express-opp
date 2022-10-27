import axios, { AxiosResponse } from 'axios';
import { EXTERNAL_API } from '../config/config';
import { Post } from '../interfaces/post.interface';

class PostService {
  public urlExternalApi: string;
  constructor() {
    this.urlExternalApi = `${EXTERNAL_API}posts` ?? 'https://jsonplaceholder.typicode.com/post';
  }

  public async getAllPosts(): Promise<Post[]> {
    const resp: AxiosResponse = await axios.get<Post[]>(this.urlExternalApi);
    const posts: Post[] = resp.data;
    return posts;
  }

  public async getPostById(id: string): Promise<Post> {
    const resp: AxiosResponse = await axios.get<Post>(`${this.urlExternalApi}/${id}`);
    const post: Post = resp.data;
    return post;
  }

  public async updatePost(id: string, bodyData: any) {
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

  public async deletePost(id: string): Promise<Post | undefined> {
    try {
      const { data, status }: AxiosResponse = await axios.delete(`${EXTERNAL_API}/${id}` ?? `https://jsonplaceholder.typicode.com/posts/${id}`);
      const post: Post = data;
      if (status === 200 && Object.keys(post).length === 0) {
        return post;
      }
      return post;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

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
