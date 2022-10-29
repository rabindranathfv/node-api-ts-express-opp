"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        userId:
 *          type: number
 *          description: user's id related
 *        id:
 *          type: number
 *          description: id of the post
 *        body:
 *          type: string
 *          descripcion: content of the post
 *        title:
 *          type: string
 *          description: title of the post
 */
/**
 * @swagger
 *  tags:
 *    name: Post
 *    description: Post endpoints related with Axios and external API
 */
class PostsRoute {
    path = '/post';
    router = (0, express_1.Router)();
    postController = new post_controller_1.default();
    constructor() {
        this.initBaseRoutes();
    }
    initBaseRoutes() {
        /**
         * @swagger
         * /api/v1/post:
         *  get:
         *    summary: returns all the posts
         *    tags: [Post]
         *    responses:
         *      200:
         *        descriptiopn: returns all the posts
         *        content:
         *          applicattion/json:
         *            schema:
         *              type: array
         *              items:
         *                $ref: '#/components/schemas/Post'
         *              description: array of posts
         */
        this.router.get(`${this.path}`, this.postController.getAllPostsCtrl);
        /**
         * @swagger
         * /api/v1/post/{id}:
         *  get:
         *    summary: return an specific Post
         *    tags: [Post]
         *    responses:
         *      200:
         *        descriptiopn: return an specific Post
         *        content:
         *          applicattion/json:
         *            schema:
         *              type: object
         *              $ref: '#/components/schemas/Post'
         *              description: return an specific Post
         */
        this.router.get(`${this.path}/:id`, this.postController.getPostByIdCtrl);
        /**
         * @swagger
         * /api/v1/post/{id}:
         *  put:
         *    summary: update an specific Post
         *    tags: [Post]
         *    parameters:
         *      - in: path
         *        name: id
         *        required: true
         *        description: id of the post
         *        schema:
         *          type: integer
         *      - in: body
         *        name: title
         *        required: true
         *        description: title of the post
         *      - in: body
         *        name: body'
         *        required: true
         *        description: content of the post
         *    responses:
         *      200:
         *        descriptiopn: update an specific Post
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                id:
         *                  type: integer
         *                  description: postId
         *                body:
         *                  type: string
         *                  description: content of the post
         *                title:
         *                  type: string
         *                  description: title of post
         *      400:
         *        description: bad request missing parameters
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              propierties:
         *                message:
         *                  type: string
         *                  description: error description message
         */
        this.router.put(`${this.path}/:id`, this.postController.updatePostCtrl);
        /**
         * @swagger
         * /api/v1/post/{id}:
         *  delete:
         *    summary: delete an specific Post
         *    tags: [Post]
         *    parameters:
         *      - in: path
         *        name: id
         *        required: true
         *        description: id of the post
         *        schema:
         *          type: integer
         *    responses:
         *      200:
         *        descriptiopn: delete an specific Post
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              properties:
         *                id:
         *                  type: integer
         *                  description: postId
         *                body:
         *                  type: string
         *                  description: content of the post
         *                title:
         *                  type: string
         *                  description: title of post
         *      400:
         *        description: bad request missing parameters
         *        content:
         *          application/json:
         *            schema:
         *              type: object
         *              propierties:
         *                message:
         *                  type: string
         *                  description: error description message
         */
        this.router.delete(`${this.path}/:id`, this.postController.deletePostCtrl);
        this.router.post(`${this.path}`, this.postController.createPostCtrl);
    }
}
exports.default = PostsRoute;
//# sourceMappingURL=post.routes.js.map