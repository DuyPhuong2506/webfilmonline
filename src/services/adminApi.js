import { ACCESS_TOKEN } from '../Settings/configUrl';
import {  callApi, callApiMuti,callApiText } from '../utils/callApi';

export const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}

export const apiAdmin = {
    fetchApiLogin(data) {
        return callApi("login", "post", data);
    },
    
}

export const apiAdminKindFilm = {
    fetchApiAddKindOfFilm(data) {
        return callApi("api/KindofFirm", "post", data);
    },
    fetchApiListKindOfFilm() {
        return callApi("api/KindofFirm");
    },
    fetchApiUpdateKindFilm(id ,data) {
        return callApi(`api/KindofFirm/${id}`,"put", data);
    },
    fetchApiDeleteKindFilm(id) {
        return callApi(`api/KindofFirm/${id}`,"delete");
    },
}
export const apiAdminConfig = {
    fetchApiListConfig(data) {
        return callApi("api/Configs", "get", data);
    },
    fetchApiAddConfig(data) {
        return callApiMuti("api/Configs", "put", data);
    },
    fetchApiAddEmail(email) {
        return callApiText(`api/Configs/${email}`, "put");
    },
}

export const apiAdminFilm = {
    fetchApiAddFilm(data) {
        return callApi("api/Firm", "post", data);
    },
    fetchApiUpdateFilm(id ,data) {
        return callApi(`api/Firm/${id}`,"put", data);
    },

    fetchApiDeleteFilm(id) {
        return callApi(`api/Firm/${id}`,"delete");
    },

    fetchApiListFilm() {
        return callApi("api/Firm");
    },

    fetchApiUploadImageFilm(id, data) {
        return callApiMuti(`api/Firm/image/${id}`, "post", data);
    },
    fetchApiGetImageFilm(id) {
        return callApi(`api/Firm/image/${id}`, "get");
    },
}


export const apiAdminTypeFilm = {
    fetchApiAddTypeFilm(data) {
        return callApi("api/TypeFirm", "post", data);
    },
    fetchApiListTypeFilm() {
        return callApi("api/TypeFirm");
    },
    fetchApiUpdateTypeFilm(id ,data) {
        return callApi(`api/TypeFirm/${id}`,"put", data);
    },
    fetchApiDeleteTypeFilm(id) {
        return callApi(`api/TypeFirm/${id}`,"delete");
    },
}
export const apiAdminUser = {
    fetchApiListUsers(data) {
        return callApi("api/AppUser", "get", data);
    },
    fetchApiAddUsers(data) {
        return callApi("register", "post", data);
    },
}


export const apiAdminTypeFilmConfig = {
    fetchApiAddTypeFilmConfig(data) {
        return callApi("api/TypeFirmConfigs", "post", data);
    },

    fetchApiTypeFilm(id) {
        return callApi(`api/Firm/typeget/${id}`);
    },

}

export const apiAdminEposideFilm = {
    fetchApiAddEposideFilm(id,data) {
        return callApi(`api/MultipleFirm/${id}`, "post", data);
    },
    fetchApiListEposideFilm() {
        return callApi(`api/MultipleFirm`);
    },
    fetchApiUpdateEposideFilm(id ,idEdit,data) {
        return callApi(`api/MultipleFirm/${id}/${idEdit}`,"put", data);
    },
    fetchApiDeleteEposideFilm(id) {
        return callApi(`api/MultipleFirm/${id}`,"delete");
    },
}