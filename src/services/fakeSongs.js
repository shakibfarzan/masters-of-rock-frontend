import * as artistApi from './fakeArtists';
import * as albumApi from './fakeAlbums';
import * as genreApi from './fakeGenres'

export const songs = [
    {
        _id: 'f34c23ct53x1323x',
        name: 'Restless Oblivion',
        artist: {
            _id: 'swww3f434t5g55g',
            name: 'Anathema',
        },
        album: {
            _id: 'efwwergergewheh', name: 'Silent Enigma', year: 1995, cover: 'images/covers/Anathema-Silent Enigma.jpg'
        },
        genre: {
            _id: '03kdd3030kd30kd', name: 'Doom Metal'
        },
        url: 'audios/Anathema/The Silent Enigma/01 - Restless Oblivion.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2001, 9, 15),
        likes: 20
    },
    {
        _id: 'efwwergergewheh',
        name: 'The Silent Enigma',
        artist: {
            _id: 'swww3f434t5g55g',
            name: 'Anathema',
        },
        album: {
            _id: 'efwwergergewheh', name: 'Silent Enigma', year: 1995, cover: 'images/covers/Anathema-Silent Enigma.jpg'
        },
        genre: {
            _id: '03kdd3030kd30kd', name: 'Doom Metal'
        },
        url: 'audios/Anathema/The Silent Enigma/07 - The Silent Enigma.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2010, 8, 15),
        likes: 10

    },
    {
        _id: 'sfwewverververv',
        name: 'A Dying Wish',
        artist: {
            _id: 'swww3f434t5g55g',
            name: 'Anathema',
        },
        album: {
            _id: 'efwwergergewheh', name: 'Silent Enigma', year: 1995, cover: 'images/covers/Anathema-Silent Enigma.jpg'
        },
        genre: {
            _id: '03kdd3030kd30kd', name: 'Doom Metal'
        },
        url: 'audios/Anathema/The Silent Enigma/08 - A Dying Wish.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2002, 10, 25),
        likes: 9
    },
    {
        _id: 'swww3f434t5g55g',
        name: 'Desperado',
        artist: {
            _id: 'efwwergergewheh',
            name: 'Eagles',
        },
        album: {
            _id: 'f34c23ct53x1323x', name: 'Desperado', year: 1973, cover: 'images/covers/(1973) Desperado (Front Cover-).jpg'
        },
        genre: {
            _id: 'sfwewverververv', name: 'Soft Rock'
        },
        url: 'audios/Eagles/Desperado/DESPERADO.MP3',
        type: 'OriginalSong',
        dateUploaded: new Date(2011, 7, 15),
        likes: 87
    },
    {
        _id: '2e23r323d3d3d2d',
        name: 'Out of Control',
        artist: {
            _id: 'efwwergergewheh',
            name: 'Eagles',
        },
        album: {
            _id: 'f34c23ct53x1323x', name: 'Desperado', year: 1973, cover: 'images/covers/(1973) Desperado (Front Cover-).jpg'
        },
        genre: {
            _id: 'sfwewverververv', name: 'Soft Rock'
        },
        url: 'audios/Eagles/Desperado/OUT_OF_CONTROL.MP3',
        type: 'OriginalSong',
        dateUploaded: new Date(2005, 7, 10),
        likes: 2
    },
    {
        _id: 'qwdf3def44ff4f4',
        name: 'Twenty One',
        artist: {
            _id: 'efwwergergewheh',
            name: 'Eagles',
        },
        album: {
            _id: 'f34c23ct53x1323x', name: 'Desperado', year: 1973, cover: 'images/covers/(1973) Desperado (Front Cover-).jpg'
        },
        genre: {
            _id: 'sfwewverververv', name: 'Soft Rock'
        },
        url: 'audios/Eagles/Desperado/TWENTY_ONE.MP3',
        type: 'OriginalSong',
        dateUploaded: new Date(2021, 1, 15),
        likes: 45
    },
    {
        _id: 'omwomxwoxmwomxm',
        name: 'Sweet Sacrifice',
        artist: {
            _id: '2e23r323d3d3d2d',
            name: 'Evanescence',
        },
        album: {
            _id: 'swww3f434t5g55g', name: 'The Open Door', year: 2006, cover: 'images/covers/evanescence.jpg'
        },
        genre: {
            _id: '1929138198ye82y', name: 'Alternative Rock'
        },
        url: 'audios/Evanescence/The Open Door/01_ Sweet Sacrifice.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2007, 9, 15),
        likes: 18
    },
    {
        _id: '2dj2dj2jd2jdjdd',
        name: 'Lithium',
        artist: {
            _id: '2e23r323d3d3d2d',
            name: 'Evanescence',
        },
        album: {
            _id: 'swww3f434t5g55g', name: 'The Open Door', year: 2006, cover: 'images/covers/evanescence.jpg'
        },
        genre: {
            _id: '1929138198ye82y', name: 'Alternative Rock'
        },
        url: 'audios/Evanescence/The Open Door/04_ Lithium.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2020, 9, 5),
        likes: 24
    },
    {
        _id: '11111111111111',
        name: 'Like You',
        artist: {
            _id: '2e23r323d3d3d2d',
            name: 'Evanescence',
        },
        album: {
            _id: 'swww3f434t5g55g', name: 'The Open Door', year: 2006, cover: 'images/covers/evanescence.jpg'
        },
        genre: {
            _id: '1929138198ye82y', name: 'Alternative Rock'
        },
        url: 'audios/Evanescence/The Open Door/08_ Like You.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2008, 9, 15),
        likes: 18
    },
    {
        _id: '11111111111122',
        name: 'Parisienne Walkways',
        artist: {
            _id: 'qwdf3def44ff4f4',
            name: 'Gary Moore',
        },
        album: {
            _id: 'jwjwd9djw9djwjd', name: 'The Platinum Collection', year: 2006, cover: 'images/covers/front.jpg'
        },
        genre: {
            _id: 'efwwergergewheh', name: 'Blues Rock'
        },
        url: 'audios/Gary Moore/The Platinum Collection/01. Parisienne Walkways.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2012, 1, 15),
        likes: 32
    },
    {
        _id: '11111111111213',
        name: 'The Loner',
        artist: {
            _id: 'qwdf3def44ff4f4',
            name: 'Gary Moore',
        },
        album: {
            _id: 'jwjwd9djw9djwjd', name: 'The Platinum Collection', year: 2006, cover: 'images/covers/front.jpg'
        },
        genre: {
            _id: 'efwwergergewheh', name: 'Blues Rock'
        },
        url: 'audios/Gary Moore/The Platinum Collection/08. The Loner.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2010, 9, 19),
        likes: 8
    },
    {
        _id: '1111111111221',
        name: 'One Good Reason',
        artist: {
            _id: 'qwdf3def44ff4f4',
            name: 'Gary Moore',
        },
        album: {
            _id: 'jwjwd9djw9djwjd', name: 'The Platinum Collection', year: 2006, cover: 'images/covers/front.jpg'
        },
        genre: {
            _id: 'efwwergergewheh', name: 'Blues Rock'
        },
        url: 'audios/Gary Moore/The Platinum Collection/16. One Good Reason.mp3',
        type: 'OriginalSong',
        dateUploaded: new Date(2011, 11, 15),
        likes: 66
    }
]

export function getSongs() {
    return songs;
}

export function getSong(id) {
    return songs.find(s => s._id === id)
}

export function saveSong(song) {
    let songInDb = songs.find(s => s._id === song._id) || {};
    songInDb.name = song.name;
    const songArtist = artistApi.artists.find(a => a._id === song.artistId);
    songInDb.artist = {
        _id: songArtist._id,
        name: songArtist.name
    }
    songInDb.album = albumApi.albums.find(a => a._id === song.albumId)
    const songGenre = genreApi.genres.find(g => g._id === song.genreId);
    songInDb.genre = {
        _id: songGenre._id,
        name: songGenre.name
    }
    songInDb.url = song.url
    songInDb.type = song.type
    songInDb.dateUploaded = song.dateUploaded
    songInDb.likes = song.likes
    if (!songInDb._id) {
        songInDb._id = Date.now().toString();
        songs.push(songInDb);
    }

    return songInDb;
}

export function deleteSong(id) {
    let songInDb = songs.find(s => s._id === id);
    songs.splice(songs.indexOf(songInDb), 1);
    return songInDb;
}