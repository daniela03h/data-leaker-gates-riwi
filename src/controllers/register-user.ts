import { AuthController } from "./auth-controller"
import { guardianAuth } from "./guard";

const registerForm = document.querySelector('.register-form') as HTMLFormElement

const authController = new AuthController()

window.addEventListener("DOMContentLoaded", () => {
    guardianAuth()
});


registerForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault()
    
    const formData = new FormData(registerForm)
    const registerData = {
        email: (formData.get('email')) as string,
        password: (formData.get('password')) as string,
    }
    
    authController.register(registerData)
})