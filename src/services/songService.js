import http from './httpService'

export function getSongs() {
    return http.get('/songs')
}

export function getSong(id) {
    return http.get(`/songs/${id}`)
}

export function saveSong(song) {
    if (song._id) {
        const body = { ...song };
        delete body._id;
    }
    const formData = new FormData();
    return http.post('/songs', formData)
}

export function addRemoveLikes(id, likes) {
    const body = { likes };
    return http.put(`/songs/likes/${id}`, body)
}