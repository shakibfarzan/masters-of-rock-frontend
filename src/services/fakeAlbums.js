import * as songApi from './fakeSongs'
import * as artistApi from './fakeArtists'
export const albums = [
    {
        _id: 'f34c23ct53x1323x', name: 'Desperado', artist: {
            _id: 'efwwergergewheh',
            name: 'Eagles',
        }, year: 1973, cover: 'images/covers/(1973) Desperado (Front Cover-).jpg'
    },
    {
        _id: 'efwwergergewheh', name: 'Silent Enigma', artist: {
            _id: 'swww3f434t5g55g',
            name: 'Anathema',
        }, year: 1995, cover: 'images/covers/Anathema-Silent Enigma.jpg'
    },
    { _id: 'sfwewverververv', name: 'Paranoid', year: 1970 },
    {
        _id: 'swww3f434t5g55g', name: 'The Open Door', artist: {
            _id: '2e23r323d3d3d2d',
            name: 'Evanescence',
        }, year: 2006, cover: 'images/covers/evanescence.jpg'
    },
    {
        _id: 'jwjwd9djw9djwjd', name: 'The Platinum Collection', artist: {
            _id: 'qwdf3def44ff4f4',
            name: 'Gary Moore',
        }, year: 2006, cover: 'images/covers/front.jpg'
    }
]

export function getAlbums() {
    return albums;
}

export function getAlbum(id) {
    return albums.find(a => a._id === id)
}

export function saveAlbum(album) {
    let albumInDb = albums.find(a => a._id === album._id) || {};
    albumInDb.name = album.name;
    albumInDb.year = album.year
    albumInDb.cover = album.cover
    const albumArtist = artistApi.artists.find(a => a._id === album.artistId);
    albumInDb.artist = {
        _id: albumArtist._id,
        name: albumArtist.name
    }
    if (!albumInDb._id) {
        albumInDb._id = Date.now().toString();
        albums.push(albumInDb);
    }

    return albumInDb;
}

export function deleteAlbum(id) {
    let albumInDb = albums.find(a => a._id === id);
    albums.splice(albums.indexOf(albumInDb), 1);
    return albumInDb;
}

export function getSongs(id) {
    let songs = []
    songApi.songs.forEach(song => {
        if (song.album._id === id) {
            songs.push(song)
        }
    })
    return songs;
}