import { AuthController } from './src/controllers/auth-controller'
import { guardianAuth } from './src/controllers/guard'

const loginForm = document.querySelector('.login-form') as HTMLFormElement

const authController = new AuthController()

window.addEventListener("DOMContentLoaded", () => {
    guardianAuth()
});

loginForm.addEventListener('submit', (event:Event) => {
    event.preventDefault()

    const formData = new FormData(loginForm)
    const user = {
        email: (formData.get('email')) as string,
        password: (formData.get('password')) as string,
    }

    authController.login(user)
})