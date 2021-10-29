import http from './httpService'
import jwtDecode from 'jwt-decode'

const tokenKey = "token";

http.setJwt(getJwt());

export async function signIn(username, password) {
    const { data: jwt } = await http.post('/auth', { username, password });
    localStorage.setItem(tokenKey, jwt);
}

export function signInWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function signOut() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signIn,
    signInWithJwt,
    signOut,
    getCurrentUser,
    getJwt
};