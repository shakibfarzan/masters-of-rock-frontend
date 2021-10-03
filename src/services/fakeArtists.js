import * as musicianApi from './fakeMusicians'
import * as songApi from './fakeSongs'
import config from '../config.json'
export const artists = [
    {
        _id: 'f34c23ct53x1323x',
        name: 'B.B. King',
        epithet: 'King of Blues',
        biography: 'Riley B. King (September 16, 1925 – May 14, 2015), known professionally as B.B. King, was an American blues singer-songwriter, guitarist, and record producer. He introduced a sophisticated style of soloing based on fluid string bending, shimmering vibrato and staccato picking that influenced many later blues electric guitar players. AllMusic recognized King as "the single most important electric guitarist of the last half of the 20th century".',
        imageUrl: 'images/B.B.King/B.B.King1.jpg',
        personal_influences: 'As main influences, B.B. King cites T-Bone Walker, Charlie Christian, Django Reinhardt, Lonnie Johnson, Leroy Carr and Bukka White.',
        essential_stylistic_features: '1. Vibrato 2. String Bending 3. Choice of notes/phrasing/Rhythm',
        harmonic_material: 'B.B. King primarily employs pentatonic scales and very occasionally an arpeggio',
        sound: 'B.B. King used equipment characteristic of the different periods he played in. He played guitars made by various manufacturers early in his career. He played a Fender Esquire on most of his recordings with RPM Records. However, he was best known for playing variants of the Gibson ES-355.',
    },
    {
        _id: 'efwwergergewheh',
        name: 'Eagles',
        biography: 'The Eagles are an American rock band formed in Los Angeles in 1971. With five number-one singles and six number-one albums, six Grammy Awards and five American Music Awards, the Eagles were one of the most successful musical acts of the 1970s in North America.',
        imageUrl: 'images/Eagles/Eagles-Bernie-Leadon-Don-Henley-Glenn-Frey.jpg',
        personal_influences: 'Influenced by 1960s rhythm and blues, soul, bluegrass, and rock bands such as the Byrds and Buffalo Springfield,[103] the Eagles\' overall sound has been described as "California rock".',
        essential_stylistic_features: '',
        harmonic_material: '',
        sound: ' In the words of Sal Manna, author of the CD liner notes of the band\'s 1994 album Hell Freezes Over, "no one knew quite what \'California rock\' meant – except perhaps that, because in California anything was possible, music that came from that promising land was more free-spirited and free-ranging."[105] Rolling Stone described the Eagles\' sound as "country-tinged vocal harmonies with hard rock guitars and lyrics".[citation needed] The group\'s sound has also been described as country rock,[84][106][107][108][109] soft rock[64][110][111][112][113] and folk rock,[114][115][116] and in later years the band became associated with the album rock and arena rock labels.',
    },
    {
        _id: 'sfwewverververv',
        name: 'Albert King',
        biography: 'Albert Nelson (April 25, 1923 – December 21, 1992), known by his stage name Albert King, was an American blues guitarist and singer whose playing influenced many other blues guitarists. He is perhaps best known for the popular and influential album Born Under a Bad Sign (1967) and its title track. He, B.B. King, and Freddie King, all unrelated, were known as the "Kings of the Blues." The left-handed King was known for his "deep, dramatic sound that was widely imitated by both blues and rock guitarists.',
        imageUrl: 'images/Albert King/415431021AlbertKingB1.jpg',
        personal_influences: 'King influenced other guitarists, including Jimi Hendrix, Mick Taylor, Derek Trucks, Warren Haynes, Mike Bloomfield and Joe Walsh (the James Gang guitarist spoke at King\'s funeral). He also influenced his contemporaries Albert Collins and Otis Rush. He was often cited by Stevie Ray Vaughan as having been his greatest influence. Eric Clapton has said that his work on the 1967 Cream hit "Strange Brew" and throughout the album Disraeli Gears was inspired by King.',
        essential_stylistic_features: 'phrasing',
        harmonic_material: 'pentatonic jazzy blues scale',
        sound: 'For amplification, King used a solid-state Acoustic amplifier, with a speaker cabinet containing two 15-inch speakers and a horn ("which may or may not have been operative"). Later in his career he also used an MXR Phase 90'
    },
    {
        _id: 'swww3f434t5g55g',
        name: 'Anathema',
        biography: 'Anathema were a rock band from Liverpool, England. The group was formed in 1990 by Vincent and Daniel Cavanagh, bassist Jamie Cavanagh, drummer/keyboardist John Douglas, and vocalist Darren White.Anathema released 11 studio albums including Distant Satellites (2014), which included the song "Anathema", named the 2014 Anthem of the Year at the third annual Progressive Music Awards.[10] Three years later The Optimist was named Album of the Year at the 2017 Progressive Music Awards',
        imageUrl: 'images/Anathema/JS73787321.jpg',
        line_up: [
            {
                _id: '2e23r323d3d3d2d',
                name: { _id: 'qwdf3def44ff4f4', firstname: 'Vincent', lastname: 'Cavanagh' },
                instruments: [{ _id: 'f34c23ct53x1323x', name: 'Guitar' }, { _id: '2e23r323d3d3d2d', name: 'Lead Vocal' }]
            },
            {
                _id: 'qwdf3def44ff4f4',
                name: { _id: 'omwomxwoxmwomxm', firstname: 'Jamie', lastname: 'Cavanagh' },
                instruments: [{ _id: 'sfwewverververv', name: 'Bass Guitar' }]
            }
        ],
        sound: 'Anathema formed in 1990 as a doom metal band, initially going by the name Pagan Angel. In November of that year, the band recorded their first demo, entitled An Iliad of Woes. This demo caught the attention of several bands and labels from the English metal scene.',
    },
    {
        _id: '2e23r323d3d3d2d',
        name: 'Evanescence',
        biography: 'Evanescence is an American rock band founded in Little Rock, Arkansas, in 1995 by singer and pianist Amy Lee and guitarist Ben Moody. After recording independent albums, the band released their first full-length album, Fallen, on Wind-up Records in 2003.',
        imageUrl: 'images/Evanescence/ede532-001-mf_0.jpg',
        line_up: [
            {
                _id: 'f34c23ct53x1323x',
                name: { _id: 'f34c23ct53x1323x', firstname: 'Amy', lastname: 'Lee' },
                instruments: [{ _id: '2e23r323d3d3d2d', name: 'Lead Vocal' }, { _id: '2dj2dj2jd2jdjdd', name: 'Piano' }]
            },
            {
                _id: 'efwwergergewheh',
                name: { _id: 'efwwergergewheh', firstname: 'Jen', lastname: 'Majura' },
                instruments: [{ _id: 'f34c23ct53x1323x', name: 'Guitar' }]
            },
            {
                _id: 'sfwewverververv',
                name: { _id: 'sfwewverververv', firstname: 'Tim', lastname: 'McCord' },
                instruments: [{ _id: 'sfwewverververv', name: 'Bass Guitar' }]
            },
            {
                _id: 'swww3f434t5g55g',
                name: { _id: 'swww3f434t5g55g', firstname: 'Will', lastname: 'Hunt' },
                instruments: [{ _id: 'efwwergergewheh', name: 'Drums' }]
            },
        ],
        personal_influences: 'Critics vary in terming Evanescence a rock or metal band, but most identify them as some form of gothic band. Publications such as The New York Times, Rough Guides and Rolling Stone have identified Evanescence as a gothic metal act, while other sources such as IGN, Spin and NME have termed them gothic rock.',
        essential_stylistic_features: 'Other genres and influences used to describe the band\'s sound include industrial rock, alternative metal, hard rock, alternative rock, post-grunge, and progressive metal. Evanescence cite Pantera, Björk, Wolfgang Amadeus Mozart, Danny Elfman, Tori Amos, Nirvana, Portishead, Massive Attack, Nine Inch Nails, Garbage, Joan Jett, and Plumb as influences.',
    },
    {
        _id: 'qwdf3def44ff4f4',
        name: 'Gary Moore',
        biography: 'Robert William Gary Moore (4 April 1952 – 6 February 2011) was a Northern Irish musician and songwriter. Over the course of his career he played in various groups and performed an eclectic range of music including blues, hard rock, heavy metal, and jazz fusion.',
        imageUrl: 'images/Gary Moore/Gary-Moore-Photo-Paul-Bergen-Redferns@1400x1050.jpg',
        personal_influences: 'One of Moore\'s biggest influences was guitarist Peter Green. The first time Moore heard Green play was at a performance with John Mayall & the Bluesbreakers, of which he said: "It was an amazing experience just to hear a guitarist walk on stage and plug into this amplifier, which I thought was a pile of shit, and get this incredible sound. He was absolutely fantastic, everything about him was so graceful."',
        essential_stylistic_features: 'vibrato , .....',
        harmonic_material: 'natural minor and the dorian scale. mixolydian scale. play bluesy ideas with the pentatonic and the blues scale.',
        sound: 'a les paul or strat-style guitar, as he often switches back and forth between both models.'
    },
]

export function getArtists() {
    return artists;
}

export function getArtist(id) {
    return artists.find(a => a._id === id)
}

export function saveArtist(artist) {
    let artistInDb = artists.find(a => a._id === artist._id) || {};
    artistInDb.name = artist.name;
    artistInDb.epithet = artist.epithet;
    artistInDb.biography = artist.biography;
    const lineUp = []
    artist.line_up.forEach(m => {
        lineUp.push(musicianApi.musicians.find(musician => musician._id === m));
    })
    artistInDb.line_up = lineUp;
    artistInDb.personal_influences = artist.personal_influences
    artistInDb.essential_stylistic_features = artist.essential_stylistic_features
    artistInDb.harmonic_material = artist.harmonic_material
    artistInDb.sound = artist.sound
    if (!artistInDb._id) {
        artistInDb._id = Date.now().toString();
        artists.push(artistInDb);
    }

    return artistInDb;
}

export function deleteArtist(id) {
    let artistInDb = artists.find(a => a._id === id);
    artists.splice(artists.indexOf(artistInDb), 1);
    return artistInDb;
}

export function getDiscography(id) {
    let songs = []
    let albums = []
    songApi.songs.forEach(song => {
        if (song.artist._id === id) {
            if (song.album.name === config['single-track']) {
                songs.push(song)
            } else {
                if (albums.length === 0) {
                    return albums.push(song.album)
                }
                albums.forEach(album => {
                    if (album._id !== song.album._id) {
                        albums.push(song.album)
                    }
                })
            }
        }
    })
    return { albums, singleTracks: songs }
}
