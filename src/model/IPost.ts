export interface IPost {
    id:                       number;
    postByUser:               number;
    title:                    string;
    body:                     string;
    creationDate:             string;
    estimatedPublicationDate: string;
    status:                   Status;
    approvalPercentage:       number;
    corrections:              null | string;
    platform:                 Platform;
    postUrl:                  string;
    multimediaUrl:            null | string;
    deletedAt:                null;
}

export enum Platform {
    Facebook = "Facebook",
    Instagram = "Instagram",
    X = "X",
}

export enum Status {
    Pending = "pending",
}