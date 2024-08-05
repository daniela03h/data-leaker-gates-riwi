import { Spinner } from "./spinner";
import { renderPosts } from "./render-post";
import { guardian } from "./guard";

const logoutButton = document.querySelector(".logout-button") as HTMLButtonElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;


loaderContainer.append(Spinner());

window.addEventListener("DOMContentLoaded", () => {
    guardian()
    loaderContainer.style.display = "flex";
    renderPosts()
});

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token")
    window.location.href = "/"
})