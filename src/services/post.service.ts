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

  public async updatePost(id: string, postData: Post): Promise<Post> {
    const postById: AxiosResponse = await axios.get<Post>(`${this.urlExternalApi}/${id}`);
    if (!postById) {
      console.log('no existe el post para actualizar');
    }

    const resp: AxiosResponse = await axios.put<Post>(`${this.urlExternalApi}/${id}`, postData);
    const post: Post = resp.data;
    return post;
  }

  public async deletePost(id: string): Promise<Post> {
    const resp: AxiosResponse = await axios.get<Post>(`${this.urlExternalApi}/${id}`);
    const posts: Post = resp.data;
    return posts;
  }

  public async createPost(postBody: Post): Promise<Post> {
    console.log('🚀 ~ file: post.service.ts ~ line 45 ~ PostService ~ createPost ~ postBody', postBody);
    const resp: AxiosResponse = await axios.post<Post>(this.urlExternalApi, postBody);
    const newPostId = resp.data;
    return newPostId;
  }
}

export default PostService;
