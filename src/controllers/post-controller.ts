import { IPostCreateParams, IPostResponse, IPost } from "../model/IPost";


export class PostController {
    url: string = 'https://api-posts.codificando.xyz/';

    constructor() { }

    async getPosts(): Promise<IPost[]> {
        const response = await fetch(`${this.url}posts`);
        const data = await response.json();
        return data
    }

    async getPost() {
        const idPost = localStorage.getItem("id-view")
        const response = await fetch(`${this.url}posts`, {
            headers: {
                'Content-Type': 'Application/json',
                'x-user-email': sessionStorage.getItem('x-user-email') ?? ''
            },   
        });
        const data = await response.json();
        const post = data.find((post: IPost) => post.id === parseInt(idPost ?? '0'))
        return post
    }

    async createPosts(dataPost: IPostCreateParams) {
        const response = await fetch(`${this.url}posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json', 
                'x-user-email': sessionStorage.getItem('x-user-email') ?? ''
            },
            body: JSON.stringify(dataPost)
        });

        const data = await response.json() as IPostResponse;
        if (response.status != 201) {
            throw new Error("No se puede publicar post");
        }

        return data
    }

    async deletePost(idPost: string | number | undefined) {
        if (idPost === undefined) {
            return
        }
        const response = await fetch(`${this.url}posts/${idPost}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json',
                'x-user-email': sessionStorage.getItem('x-user-email') ?? ''
            },
        });

        if (response.status !== 200) {
            throw new Error("No se puede eliminar");
        }

        const data = await response.json();
        return data
    }

}

