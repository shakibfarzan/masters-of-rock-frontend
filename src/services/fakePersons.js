export const persons = [
    { _id: 'f34c23ct53x1323x', firstname: 'Amy', lastname: 'Lee' },
    { _id: 'efwwergergewheh', firstname: 'Jen', lastname: 'Majura' },
    { _id: 'sfwewverververv', firstname: 'Tim', lastname: 'McCord' },
    { _id: 'swww3f434t5g55g', firstname: 'Will', lastname: 'Hunt' },
    { _id: '2e23r323d3d3d2d', firstname: 'Shakib', lastname: 'Farzan' },
    { _id: 'qwdf3def44ff4f4', firstname: 'Vincent', lastname: 'Cavanagh' },
    { _id: 'omwomxwoxmwomxm', firstname: 'Jamie', lastname: 'Cavanagh' },
    { _id: '1s2s2s22s2s2s2s', firstname: 'Parsa', lastname: 'Habibi' },
    { _id: 'qdwdwwdwwdwwdw', firstname: 'Faran', lastname: 'Fahandezh' }
]

export function getPersons() {
    return persons;
}

export function getPerson(id) {
    return persons.find(p => p._id === id)
}

export function savePerson(person) {
    let personInDb = persons.find(p => p._id === person._id) || {};
    personInDb.firstname = person.firstname;
    personInDb.lastname = person.lastname;
    if (!personInDb._id) {
        personInDb._id = Date.now().toString();
        persons.push(personInDb);
    }

    return personInDb;
}

export function deletePerson(id) {
    let personInDb = persons.find(a => a._id === id);
    persons.splice(persons.indexOf(personInDb), 1);
    return personInDb;
}