import { Request, Response } from 'express';
import PostService from '../services/post.service';

class PostController {
  public postService = new PostService();

  constructor() {}

  public getAllPostsCtrl = async (_req: Request, res: Response) => {
    const resp = await this.postService.getAllPosts();
    res.json(resp);
  };

  public getPostByIdCtrl = async (req: Request, res: Response) => {
    const resp = await this.postService.getPostById(req.params.id);
    res.json(resp);
  };

  public updatePostCtrl = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    if (!(postId > 0)) res.status(400).json({ message: `missing id of the post` });

    const resp = await this.postService.updatePost(Number(postId), req.body);
    res.json(resp);
  };

  public deletePostCtrl = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    if (!(postId > 0)) res.status(400).json({ message: `missing id of the post` });

    const resp = await this.postService.deletePost(req.params.id);
    res.status(200).json(resp);
  };

  public createPostCtrl = async (req: Request, res: Response) => {
    const resp = await this.postService.createPost(req.body);
    res.status(200).json(resp);
  };
}

export default PostController;
