import http from './httpService'

export function getSongs() {
    return http.get('/songs')
}

export function getSong(id) {
    return http.get(`/songs/${id}`)
}