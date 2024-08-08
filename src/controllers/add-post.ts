import { IPostCreateParams } from "../model/IPost";
import { PostController } from "./post-controller";
import { guardian } from "./guard";


const form = document.querySelector("form") as HTMLFormElement;
const titlePost = document.querySelector('#title-post') as HTMLInputElement;
const bodyPost = document.querySelector('#body') as HTMLInputElement;
const creationPost = document.querySelector('#creation-date') as HTMLInputElement;
const publicationPost = document.querySelector('#estimated-publication-date') as HTMLInputElement; 
const statusPost= document.querySelector('#status') as HTMLInputElement;
const approvalPercentagePost= document.querySelector('#approvalPercentage') as HTMLInputElement;
const corrections= document.querySelector('#corrections') as HTMLInputElement;
const platforPost= document.querySelector('#platform') as HTMLInputElement;
const postUrl= document.querySelector('#postUrl') as HTMLInputElement;
const multimediaUrl= document.querySelector('#multimediaUrl') as HTMLInputElement;
const creator= document.querySelector('#creator') as HTMLInputElement;


const logoutButton = document.querySelector(".logout-button") as HTMLButtonElement;


const postController = new PostController();

window.addEventListener("DOMContentLoaded", () => {
    guardian()
});


logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("x-user-email")
    window.location.href = "/"
})

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newPost: IPostCreateParams = {
        title: titlePost.value,
        body: bodyPost.value,
        creationDate: creationPost.value,
        estimatedPublicationDate: publicationPost.value,
        status: statusPost.value,
        approvalPercentage: parseInt(approvalPercentagePost.value ?? "0"),
        corrections: corrections.value,
        platform: platforPost.value,
        postUrl: postUrl.value,
        multimediaUrl: multimediaUrl.value,
        creator: creator.value
    }

    try {
        const postAdded = await postController.createPosts(newPost);
        alert("Se agrego post");
        form.reset();
        window.location.href = "../views/home.html";
        console.log(postAdded);

    } catch (e) {
        console.log(e);
    }
})
