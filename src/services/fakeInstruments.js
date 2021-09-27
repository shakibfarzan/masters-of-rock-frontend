export const instruments = [
    { _id: 'f34c23ct53x1323x', name: 'Guitar' },
    { _id: 'efwwergergewheh', name: 'Drums' },
    { _id: 'sfwewverververv', name: 'Bass Guitar' },
    { _id: 'swww3f434t5g55g', name: 'Keyboard' },
    { _id: '2e23r323d3d3d2d', name: 'Lead Vocal' },
    { _id: 'qwdf3def44ff4f4', name: 'Percussion' },
    { _id: 'omwomxwoxmwomxm', name: 'Turntable' },
    { _id: '2dj2dj2jd2jdjdd', name: 'Piano' }
]

export function getInstruments() {
    return instruments;
}

export function getInstrument(id) {
    return instruments.find(i => i._id === id)
}

export function saveInstrument(instrument) {
    let instrumentInDb = instruments.find(i => i._id === instrument._id) || {};
    instrumentInDb.name = instrument.name;
    if (!instrumentInDb._id) {
        instrumentInDb._id = Date.now().toString();
        instruments.push(instrumentInDb);
    }

    return instrumentInDb;
}

export function deleteInstrument(id) {
    let albumInDb = instruments.find(a => a._id === id);
    instruments.splice(instruments.indexOf(albumInDb), 1);
    return albumInDb;
}