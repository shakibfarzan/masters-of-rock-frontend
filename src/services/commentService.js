import http from './httpService'

export function getCommentsOfGivenSong(id) {
    return http.get(`/comments/${id}`)
}

export function saveComment(comment) {
    if (comment._id) {
        const body = { ...comment };
        delete body._id;
        return http.put(`/comments/${comment._id}`, body);
    }
    return http.post('/comments', comment);
}

export function deleteComment(id) {
    return http.delete(`/comments/${id}`)
}

export function deleteCommentByUser(id) {
    return http.delete(`/comments/myComments/${id}`)
}