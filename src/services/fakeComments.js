import * as userApi from './fakeUsers'
import * as songApi from './fakeSongs'
const comments = [
    {
        _id: "99999999",
        user: {
            _id: '0wdwcowcowmcwoc',
            name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
            username: "parsahabibi"
        },
        song: {
            _id: 'f34c23ct53x1323x',
            name: 'Restless Oblivion',
        },
        body: "So beautiful!",
        dateSent: new Date(2001, 9, 15)
    },
    {
        _id: "00000000",
        user: {
            _id: '0wdwcowcowmcwoc',
            name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
            username: "parsahabibi"
        },
        song: {
            _id: 'efwwergergewheh',
            name: 'The Silent Enigma',
        },
        body: "Not bad",
        dateSent: new Date(2011, 6, 12)
    },
    {
        _id: "00000001",
        user: {
            _id: '0wdwcowcowmcwoc',
            name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
            username: "parsahabibi"
        },
        song: {
            _id: 'efwwergergewheh',
            name: 'The Silent Enigma',
        },
        body: "loremsdvsd sdvdvb sdvdsdvasdv vsvssv sdavsdvsdvb asvvsds!",
        dateSent: new Date(2021, 5, 10)
    },
    {
        _id: "00000002",
        user: {
            _id: '0wdwcowcowmcwoc',
            name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
            username: "parsahabibi"
        },
        song: {
            _id: 'efwwergergewheh',
            name: 'The Silent Enigma',
        },
        body: "!!!!!!!!!!!",
        dateSent: new Date(2002, 3, 20)
    },
    {
        _id: "01010101010",
        user: {
            _id: 'wj0jx0x0wx0wow',
            name: { _id: 'qdwdwwdwwdwwdw', firstname: 'Faran', lastname: 'Fahandezh' },
            username: "faranfahandex"
        },
        song: {
            _id: 'efwwergergewheh',
            name: 'The Silent Enigma',
        },
        body: "I like it",
        dateSent: new Date(2013, 4, 20)
    },
    {
        _id: "01011101010",
        user: {
            _id: 'wj0jx0x0wx0wow',
            name: { _id: 'qdwdwwdwwdwwdw', firstname: 'Faran', lastname: 'Fahandezh' },
            username: "faranfahandex"
        },
        song: {
            _id: 'sfwewverververv',
            name: 'A Dying Wish',
        },
        body: "Audio player component that provides consistent UI/UX on different browsers.Super customizable layout Flexbox css with SVG icons. Mobile friendly. Accessibility supported, keyboards events supported. Support Media Source Extensions(MSE) and Encrypted Media Extensions(EME) Written in TypeScript.",
        dateSent: new Date(2008, 1, 15)
    },
    {
        _id: "01011101011",
        user: {
            _id: '0wdwcowcowmcwoc',
            name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
            username: "parsahabibi"
        },
        song: {
            _id: 'sfwewverververv',
            name: 'A Dying Wish',
        },
        body: "Audio player component that provides consistent UI/UX on different browsers.Super customizable layout Flexbox css with SVG icons. Mobile friendly. Accessibility supported, keyboards events supported. Support Media Source Extensions(MSE) and Encrypted Media Extensions(EME) Written in TypeScript.",
        dateSent: new Date(2017, 12, 5)
    }
]

export function getComments() {
    return comments
}

export function getCommentsOfGivenSong(id) {
    return comments.filter(c => c.song._id === id)
}

export function getComment(id) {
    return comments.find(c => c._id === id)
}

export function saveComment(comment) {
    let commentInDb = comments.find(p => p._id === comment._id) || {};
    commentInDb.user = userApi.users.find(u => u._id === comment.userId)
    commentInDb.song = songApi.songs.find(s => s._id === comment.songId)
    commentInDb.body = comment.body
    if (!commentInDb._id) {
        commentInDb._id = Date.now().toString();
        comments.push(commentInDb);
    }

    return commentInDb;
}

export function deleteComment(id) {
    let commentInDb = comments.find(a => a._id === id);
    comments.splice(comments.indexOf(commentInDb), 1);
    return commentInDb;
}