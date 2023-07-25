import { useEffect } from "react"
import { api } from "~/utils/api"

export function isAuth() : boolean {
    if(typeof window !== undefined) {
        const isAuth = (!window.localStorage.getItem("token") || window.localStorage.getItem("token") == "") ? false : true
        return isAuth
    }
    return false
}

export function logout() {
    const context = api.useContext()

    context.auth.logout.fetch({ token: window.localStorage.getItem("token") || "" }).then( (data) => {
        if(typeof window !== undefined) {
            window.localStorage.removeItem("token")
            window.location.replace("/")
        }
    } )
}
