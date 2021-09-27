export default function filter(filterObj, currentArray) {
    let flag = false
    currentArray.forEach(o => {
        if (o.name === filterObj.name) {
            o.title = filterObj.title
            flag = true
        }
    })
    if (!flag) {
        currentArray.push(filterObj)
    }
    return currentArray
}