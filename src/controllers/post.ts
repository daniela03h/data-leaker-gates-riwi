import { IPost } from "../model/IPost";
import {PostController} from './post-controller'
import '../scss/post.scss'

const url = "http://localhost:3000/"
const postController = new PostController()

export const Post = (props: IPost): HTMLElement => {
    let { title, creationDate, estimatedPublicationDate, approvalPercentage, corrections, platform, id } = props;
    const postContainer = document.createElement("article") as HTMLElement;
    postContainer.className = "post-container";

    const infoContainer = document.createElement("div") as HTMLElement;
    infoContainer.className = "info-container";

    const postTitle = document.createElement("h4") as HTMLHeadElement;
    postTitle.className = "post-title"

    const postCreationDate = document.createElement("p") as HTMLParagraphElement;
    const postEstimatedPublicationDate = document.createElement("p") as HTMLParagraphElement;
    const postApprovalPercentage = document.createElement("p") as HTMLParagraphElement;
    const posCorrections = document.createElement("p") as HTMLParagraphElement;
    const postPlatform = document.createElement("p") as HTMLParagraphElement;

    postTitle.innerText = title;
    postCreationDate.innerText = creationDate;
    postEstimatedPublicationDate.innerText = estimatedPublicationDate;
    // postApprovalPercentage.innerText = approvalPercentage;
    // posCorrections.innerText = corrections;
    postPlatform.innerText = platform;

   
    infoContainer.append(postTitle, postCreationDate, postEstimatedPublicationDate, postApprovalPercentage, posCorrections, postPlatform );

    const buttonsContainer = document.createElement("div") as HTMLDivElement;
    buttonsContainer.className = "button-container d-flex justify-content-between px-3"
    const viewMoreButton = document.createElement("button") as HTMLButtonElement
    viewMoreButton.innerHTML= `Ver más`
    viewMoreButton.className = "viewMore-button btn btn-primary"

    const updateButton = document.createElement("button")  as HTMLButtonElement
    updateButton.innerHTML= `Editar`
    updateButton.className = "update-button btn btn-primary"
    
    buttonsContainer.append(viewMoreButton, updateButton)
    postContainer.append( infoContainer, buttonsContainer);

    return postContainer;
}
