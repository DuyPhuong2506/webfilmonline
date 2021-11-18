import { callApi } from '../utils/callApi';
import { ACCESS_TOKEN } from '../Settings/configUrl';

const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}



export const apiFilm = {
    fetchFilms(id) {
        return callApi(`api/Firm/kindoffilm/${id}`)
    },
    fetchApiUploadImageFilm(id) {
        return callApi(`api/Firm/image/${id}`);
    },

    fetchApiTypeFilm(id) {
        return callApi(`api/Firm/typeget/${id}`);
    },

    fetchApiListTypeFilm(slug) {
        return callApi(`api/Firm/typefilm/${slug}`);
    },
    fetchApiSearchFilm(name) {
        return callApi(`api/Firm/getname/${name}`);
    },
}

export const apiWatchFilm = {
    fetchWatchFilms() {
        return callApi(`api/MultipleFirm`)
    },
    fetchApiWatchEposideFilm(id) {
        return callApi(`api/MultipleFirm/${id}`);
    },
}



