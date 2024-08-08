export function guardian() {
    if (!sessionStorage.getItem("x-user-email")) {
        window.location.href = "/"
    }
}

export function guardianAuth() {
    if (sessionStorage.getItem("x-user-email")) {
        window.location.href = "src/views/home.html"
    }
}