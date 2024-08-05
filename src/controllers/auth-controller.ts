import { ILogin, ILoginReponse } from "../model/ILogin";
import { IRegisterErrorReponse, IRegisterUser } from "../model/IRegister";


export class AuthController {
    url: string = 'https://api-posts.codificando.xyz/';
    tokenLog: string | undefined;

    constructor() { }

    async register(registerData: IRegisterUser) {
        try {
            const response = await fetch(`${this.url}users/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(registerData)
            })

            if (response.status >= 400) {
                const error: IRegisterErrorReponse = await response.json()
                const errorMessage = error.message.join('\n')
                throw new Error(errorMessage)
            }
            alert("Se registro exitosamente")

            window.location.href = '/'
        } catch (error: any) {
            alert(error.message)
        }

    }

    async login(credentials: ILogin) {
        try {
            const response = await fetch(`${this.url}auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(credentials)
            })


            const responseLogin: ILoginReponse = await response.json()
            if (responseLogin.message !== "Login successful") {
                throw new Error("Email o contraseña erroneos")
            }

            sessionStorage.setItem('token', responseLogin.message)
            window.location.href = "src/views/home.html"

        } catch (error: any) {
            alert(error.message)
        }

    }

}

