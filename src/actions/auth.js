import { firebase, googleAuthProvider } from '../firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid,
})

export function startLogin() {
    return async () => await firebase.auth().signInWithPopup(googleAuthProvider)
}

export const logout = () => ({
    type: 'LOGOUT',
})

export function startLogout() {
    return async () => await firebase.auth().signOut()
}
