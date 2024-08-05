// import { IPost } from "../model/ILogin";
import { PostController } from "./post-controller";
import { guardian } from "./guard";


const form = document.querySelector("form") as HTMLFormElement;
const titlePost = document.querySelector('#title-post') as HTMLInputElement;
const creationPost = document.querySelector('#creation-date') as HTMLInputElement;
const publicationPost = document.querySelector('#estimated-publication-date') as HTMLInputElement; 
const platforPost= document.querySelector('#platform') as HTMLInputElement;
const logoutButton = document.querySelector(".logout-button") as HTMLButtonElement;


const postController = new PostController();

window.addEventListener("DOMContentLoaded", () => {
    guardian()
});


logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    // const newCity: IPost = {
    //     titlePost: title.value,
    //     creationPost: creationDate.value,
    //     publicationPost: estimatedPublicationDate.value,
    //     platforPost: platform.value
    // }

})