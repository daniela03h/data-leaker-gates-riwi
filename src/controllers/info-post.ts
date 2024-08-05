import { guardian } from "./guard";
import { PostController } from "./post-controller"

const titlePost = document.querySelector('.card-title') as HTMLElement
const creationPost = document.querySelector('.card-creation-date') as HTMLParagraphElement
const publicationPost = document.querySelector('.card-estimated-publication-date') as HTMLParagraphElement
const platforPost= document.querySelector('.card-platform') as HTMLParagraphElement;
const logoutButton = document.querySelector(".logout-button") as HTMLButtonElement;

const citiesController = new PostController()

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})

window.addEventListener("DOMContentLoaded", () => {
    guardian()
    renderPost()
});

export async function renderPost() {
    const post = await citiesController.getCity()
    titlePost.innerHTML = post.title
    creationPost.innerHTML = post.creationDate
    publicationPost.innerHTML = post.estimatedPublicationDate
    platforPost.innerHTML = post.platform
}