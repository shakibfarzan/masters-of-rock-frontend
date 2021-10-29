import http from './httpService'

export function getFavoriteSongs() {
    return http.get('/favorites/myFavoriteSongs')
}