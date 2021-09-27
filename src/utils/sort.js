export default function sort(name, order, title) {
    const sort = { path: name };
    if (order === "asc") {
        sort.order = "desc";
    } else {
        sort.order = "asc";
    }
    sort.title = title
    return sort
};
