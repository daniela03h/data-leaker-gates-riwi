import { ILogin, ILoginErrorReponse } from "../model/ILogin";
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

//     async login(credentials: ILogin) {
//         try {
//             const response = await fetch(`${this.url}auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "Application/json"
//                 },
//                 body: JSON.stringify(credentials)
//             })

//             if (response.status != 200) {
//                 const error: ILoginErrorReponse = await response.json()
//                 const errorMessage = error.message
//                 throw new Error(errorMessage)
//             }
//             const responseLogin = await response.json()

//             this.tokenLog = responseLogin.token;
//             sessionStorage.setItem('token', JSON.stringify(responseLogin))
//             const getToken = sessionStorage.getItem("token");
//             if (getToken === responseLogin) {
//                 window.location.href = "../views/home.html"

//             // }

//         } catch (error: any) {
//             alert(error.message)
//         }

//     }

// }
