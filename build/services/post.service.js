"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
class PostService {
    urlExternalApi;
    constructor() {
        this.urlExternalApi = `${config_1.EXTERNAL_API}posts` ?? 'https://jsonplaceholder.typicode.com/post';
    }
    async getAllPosts() {
        const resp = await axios_1.default.get(this.urlExternalApi);
        const posts = resp.data;
        return posts;
    }
    async getPostById(id) {
        const resp = await axios_1.default.get(`${this.urlExternalApi}/${id}`);
        const post = resp.data;
        return post;
    }
    async updatePost(postData) {
        // Existe el post???
        const postById = await axios_1.default.get(`${this.urlExternalApi}/${postData.id}`);
        if (!postById) {
            console.log('no existe el post para actualizar');
        }
        const resp = await axios_1.default.put(`${this.urlExternalApi}/${postData.id}`, postData);
        const post = resp.data;
        return post;
    }
    async deletePost(id) {
        const resp = await axios_1.default.get(`${this.urlExternalApi}/${id}`);
        console.log('🚀 ~ file: post.service.ts ~ line 31 ~ PostService ~ deletePost ~ resp', resp.status);
        const posts = resp.data;
        return posts;
    }
}
exports.default = PostService;
//# sourceMappingURL=post.service.js.map