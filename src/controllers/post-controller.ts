import { IPost } from "../model/IPost";


export class PostController {
    url: string = 'https://api-posts.codificando.xyz/';

    constructor() {}

    async getCities(): Promise<IPost[]> {
        const response = await fetch(`${this.url}posts`);
        const data = await response.json();

        return data
    }

    async getCity() {
        const idPost = localStorage.getItem("id-view")
        const response = await fetch(`${this.url}/posts/by-creator/${idPost}`);
        const data = await response.json();

        return data
    }
}