import http from './httpService'
import FormData from 'form-data';

export function getUserSuggestions() {
    return http.get('/suggestions/mySuggestions');
}

export function getSuggestions() {
    return http.get('/suggestions')
}

export function saveSuggestion({ id, artistName, description, contents }) {
    const formData = new FormData();
    formData.append('artistName', artistName);
    formData.append('description', description);
    formData.append('contents', contents);
    if (id) {
        return http.put(`/suggestions/${id}`, formData);
    }
    return http.post('/suggestions', formData);
}