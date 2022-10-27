"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
class PostsRoute {
    path = '/post';
    router = (0, express_1.Router)();
    postController = new post_controller_1.default();
    constructor() {
        this.initBaseRoutes();
    }
    initBaseRoutes() {
        this.router.get(`${this.path}`, this.postController.getAllPostsCtrl);
        this.router.get(`${this.path}/:id`, this.postController.getPostByIdCtrl);
        this.router.put(`${this.path}/:id`, this.postController.updatePostCtrl);
        this.router.delete(`${this.path}/:id`, this.postController.deletePostCtrl);
        this.router.post(`${this.path}`, this.postController.createPostCtrl);
    }
}
exports.default = PostsRoute;
//# sourceMappingURL=post.routes.js.map