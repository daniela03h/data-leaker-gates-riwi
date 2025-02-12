import { PostController } from "./post-controller"
import { Post } from './post'

const postSection = document.querySelector('.post-section') as HTMLDivElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;

export async function renderPosts() {
    console.log('render')
    loaderContainer.style.display = "flex";
    postSection.innerHTML = ''
    try {
        const postController = new PostController();
        const posts = await postController.getCities();

        posts.forEach(async (post) => {
            postSection?.append(Post(post))
        })
    } finally {
        loaderContainer.style.display = "none";
    }
}



