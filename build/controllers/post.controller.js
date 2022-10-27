"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = __importDefault(require("../services/post.service"));
class PostController {
    postService = new post_service_1.default();
    constructor() { }
    getAllPostsCtrl = async (_req, res) => {
        const resp = await this.postService.getAllPosts();
        res.json(resp);
    };
    getPostByIdCtrl = async (req, res) => {
        const resp = await this.postService.getPostById(req.params.id);
        res.json(resp);
    };
    updatePostCtrl = async (req, res) => {
        const resp = await this.postService.updatePost(req.params.id, req.body);
        res.json(resp);
    };
    deletePostCtrl = async (req, res) => {
        const resp = await this.postService.deletePost(req.params.id);
        res.status(200).json(resp);
    };
    createPostCtrl = async (req, res) => {
        const resp = await this.postService.createPost(req.body);
        res.status(200).json(resp);
    };
}
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map