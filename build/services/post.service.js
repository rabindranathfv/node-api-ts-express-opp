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
    async updatePost(id, bodyData) {
        try {
            const { title, body } = bodyData;
            const { data } = await axios_1.default.put(`${this.urlExternalApi}/${id}`, {
                ...(body && { body }),
                ...(title && { title }),
            });
            const post = data;
            return post;
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
    async deletePost(id) {
        try {
            const { data, status } = await axios_1.default.delete(`${config_1.EXTERNAL_API}/${id}` ?? `https://jsonplaceholder.typicode.com/posts/${id}`);
            const post = data;
            if (status === 200 && Object.keys(post).length === 0) {
                return post;
            }
            return post;
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
    async createPost(bodyData) {
        const { title, body } = bodyData;
        const response = await axios_1.default.post(`${this.urlExternalApi}`, {
            title,
            body,
        });
        return response.data;
    }
}
exports.default = PostService;
//# sourceMappingURL=post.service.js.map