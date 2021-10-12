import http from './httpService'



export function getArtists() {
    return http.get('/artists')
}

export function getArtist(id) {
    return http.get(`/artists/${id}`)
}

export function getDiscography(id) {
    return http.get(`/artists/discography/${id}`)
}

export function saveArtist(artist) {

}