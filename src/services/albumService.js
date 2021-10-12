import http from './httpService'



export function getAlbums() {
    return http.get('/albums');
}

export function getAlbum(id) {
    return http.get(`/albums/${id}`);
}

export function getSongs(id) {
    return http.get(`/albums/songs/${id}`)
}