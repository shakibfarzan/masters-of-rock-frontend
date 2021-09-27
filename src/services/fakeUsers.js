import * as personApi from './fakePersons'

export const users = [
    {
        _id: '2jdiwjwjdiwwidj',
        name: {
            _id: '2e23r323d3d3d2d', firstname: 'Shakib', lastname: 'Farzan'
        },
        email: "farzan.shakib@gmail.com",
        username: "shakibfarzan",
        password: "12345678",
        isAdmin: true,
    },
    {
        _id: '0wdwcowcowmcwoc',
        name: { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
        email: "parsa.habibi@s.com",
        username: "parsahabibi",
        password: "11111111",
        favorite_songs: ['sfwewverververv', 'f34c23ct53x1323x']
    },
    {
        _id: 'wj0jx0x0wx0wow',
        name: { _id: 'qdwdwwdwwdwwdw', firstname: 'Faran', lastname: 'Fahandezh' },
        email: "farani@p.com",
        username: "faranfahandex",
        password: "00000000",
        favorite_songs: ['qwdf3def44ff4f4', 'omwomxwoxmwomxm', '2dj2dj2jd2jdjdd']
    },

]

export function getUsers() {
    return users
}

export function getUser(id) {
    return users.find(u => u._id === id)
}

export function saveUser(user) {
    let userInDb = users.find(p => p._id === user._id) || {};
    userInDb.name = personApi.getPerson(user.nameId)
    userInDb.email = user.email;
    userInDb.password = user.password;
    userInDb.isAdmin = user.isAdmin
    userInDb.favorite_songs = [...user.favorite_songs]
    if (!userInDb._id) {
        userInDb._id = Date.now().toString();
        users.push(userInDb);
    }

    return userInDb;
}

export function deleteUser(id) {
    let userInDb = users.find(a => a._id === id);
    users.splice(users.indexOf(userInDb), 1);
    return userInDb;
}