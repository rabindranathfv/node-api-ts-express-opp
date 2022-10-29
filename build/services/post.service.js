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
    // TODO: Manejar errores
    async getAllPosts() {
        const { data } = await axios_1.default.get(this.urlExternalApi);
        const posts = data;
        return posts;
    }
    // TODO: Manejar errores
    async getPostById(id) {
        const { data } = await axios_1.default.get(`${this.urlExternalApi}/${id}`);
        const post = data;
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
            const { data, status } = await axios_1.default.delete(`${config_1.EXTERNAL_API}posts/${id}` ?? `https://jsonplaceholder.typicode.com/posts/${id}`);
            const post = data;
            if (status === 200) {
                return { id: Number(id) };
            }
            return post;
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
    // TODO: Manejar errores
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