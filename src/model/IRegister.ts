export interface IRegisterUser {
    email: string,
    password: string
}

export interface IRegisterErrorReponse {
    message:    string[];
    error:      string;
    statusCode: number;
}