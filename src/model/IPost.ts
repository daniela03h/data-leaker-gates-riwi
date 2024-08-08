export interface IPost {
    id: number;
    postByUser: number;
    title: string;
    body: string;
    creationDate: string;
    estimatedPublicationDate: string;
    status: string;
    approvalPercentage: string;
    corrections: null | string;
    platform: string;
    postUrl: string;
    multimediaUrl: null | string;
    deletedAt: null;
}

interface IPostCommon {
    title: string,
    body: string,
    creationDate: string,
    estimatedPublicationDate: string,
    status: string,
    approvalPercentage: number,
    corrections: string | null,
    platform: string,
    postUrl: string,
    multimediaUrl: string | null
}

export interface IPostCreateParams extends IPostCommon{
    creator: string
}

export interface IPostResponse extends IPostCommon {
    id: number;
    deletedAt: string | null;
    creator: {
        id: number;
        email: string;
        password: string;
    }
}