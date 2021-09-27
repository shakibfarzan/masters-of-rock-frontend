import * as personApi from './fakePersons'
import * as instrumentApi from './fakeInstruments'
export const musicians = [
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
    {
        _id: '2e23r323d3d3d2d',
        name: { _id: 'qwdf3def44ff4f4', firstname: 'Vincent', lastname: 'Cavanagh' },
        instruments: [{ _id: 'f34c23ct53x1323x', name: 'Guitar' }, { _id: '2e23r323d3d3d2d', name: 'Lead Vocal' }]
    },
    {
        _id: 'qwdf3def44ff4f4',
        name: { _id: 'omwomxwoxmwomxm', firstname: 'Jamie', lastname: 'Cavanagh' },
        instruments: [{ _id: 'sfwewverververv', name: 'Bass Guitar' }]
    },
]

export function getMusicians() {
    return musicians;
}

export function getMusician(id) {
    return musicians.find(m => m._id === id)
}

export function saveMusician(musician) {
    let musicianInDb = musicians.find(m => m._id === musician._id) || {};
    musicianInDb.name = personApi.persons.find(p => p._id === musician.nameId)
    const instruments = []
    musician.instruments.forEach(i => {
        instruments.push(instrumentApi.instruments.find(instrument => instrument._id === i))
    });
    musicianInDb.instruments = instruments
    if (!musicianInDb._id) {
        musicianInDb._id = Date.now().toString();
        musicians.push(musicianInDb);
    }

    return musicianInDb;
}

export function deleteInstrument(id) {
    let albumInDb = musicians.find(a => a._id === id);
    musicians.splice(musicians.indexOf(albumInDb), 1);
    return albumInDb;
}