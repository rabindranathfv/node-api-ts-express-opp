import { Router } from 'express';
import { Routes } from '../interfaces/route.interface';
import PostController from '../controllers/post.controller';

class PostsRoute implements Routes {
  public path = '/post';
  public router = Router();
  public postController = new PostController();

  constructor() {
    this.initBaseRoutes();
  }

  public initBaseRoutes() {
    this.router.get(`${this.path}`, this.postController.getAllPostsCtrl);

    this.router.get(`${this.path}/:id`, this.postController.getPostByIdCtrl);

    this.router.put(`${this.path}/:id`, this.postController.updatePostCtrl);

    this.router.delete(`${this.path}/:id`, this.postController.deletePostCtrl);

    this.router.post(`${this.path}`, this.postController.createPostCtrl);
  }
}

export default PostsRoute;
