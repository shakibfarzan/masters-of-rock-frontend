export const genres = [
    { _id: 'f34c23ct53x1323x', name: 'Blues' },
    { _id: 'efwwergergewheh', name: 'Blues Rock', description: 'This is combine of blues and rock' },
    { _id: 'sfwewverververv', name: 'Soft Rock' },
    { _id: '1929138198ye82y', name: 'Alternative Rock' },
    { _id: '93jd93jd93jjd93', name: 'Progressive Rock' },
    { _id: '03kdd3030kd30kd', name: 'Doom Metal' }
]

export function getGenres() {
    return genres;
}

export function getGenre(id) {
    return genres.find(g => g._id === id)
}

export function saveGenre(genre) {
    let genreInDb = genres.find(g => g._id === genre._id) || {};
    genreInDb.name = genre.name;
    genreInDb.description = genre.description

    if (!genreInDb._id) {
        genreInDb._id = Date.now().toString();
        genres.push(genreInDb);
    }

    return genreInDb;
}

export function deleteGenre(id) {
    let genreInDb = genres.find(g => g._id === id);
    genres.splice(genres.indexOf(genreInDb), 1);
    return genreInDb;
}