import { AuthController } from "./auth-controller"

const registerForm = document.querySelector('.register-form') as HTMLFormElement

const authController = new AuthController()

registerForm?.addEventListener("submit", (event:Event) => {
    event.preventDefault()
    
    const formData = new FormData(registerForm)
    const registerData = {
        email: (formData.get('email')) as string,
        password: (formData.get('password')) as string,
    }
    
    authController.register(registerData)
})