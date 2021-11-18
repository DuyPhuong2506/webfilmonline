import { apiAdminFilm, apiAdminKindFilm, apiAdminTypeFilm ,apiAdminEposideFilm } from '../../../services/adminApi';
import * as constants from '../../Contants/Admin/TBConstants';




export const actFetchFilms = (payload) => ({
    type: constants.FETCH_FILMS,
    payload
});

export const actFetchsRequest = () => async (dispatch) => {
    try {
        const res = await apiAdminFilm.fetchApiListFilm();
            const payload = res.data;
            dispatch(actFetchFilms(payload));
    } catch (e) {
        console.log(e);
    }
}


export const actAddFilm = payload => ({
    type: constants.ADD_FILM,
    payload
});

// create film
export const createFilmAction = (data) => async (dispatch) => {
    try {    
        const res = await apiAdminFilm.fetchApiAddFilm(data);
        dispatch(actAddFilm(res.data));
    } catch (e) {
        console.log(e);
    }
}


export const actUpdateFilm = payload => ({
    type: constants.UPDATE_FILM,
    payload
});

// update film
export const updateFilmAction = (id, dataU) => async (dispatch) => {
    try {
        const res = await apiAdminFilm.fetchApiUpdateFilm(id, dataU);
        dispatch(actUpdateFilm({id ,update:res.data}))
    } catch (e) {
        console.log(e);
    }
}

export const actDeleteFilm = payload =>({
    type: constants.DELETE_FILM,
    payload
});


// KIND OF FILM


export const actFetchKindFilms = (payload) => ({
    type: constants.FETCH_KIND_FILMS,
    payload
});

export const actFetchsKindRequest = () => async (dispatch) => {
    try {
        const res = await apiAdminKindFilm.fetchApiListKindOfFilm();
            const payload = res.data;
            dispatch(actFetchKindFilms(payload));
    } catch (e) {
        console.log(e);
    }
}



export const actAddKindFilm = payload => ({
    type: constants.ADD_KIND_FILM,
    payload
});

// create film
export const createKindFilmAction = (data) => async (dispatch) => {
    try {    
        const res = await apiAdminKindFilm.fetchApiAddKindOfFilm(data);
        dispatch(actAddKindFilm(res.data));
    } catch (e) {
        console.log(e);
    }
}


export const actUpdateKindFilm = payload => ({
    type: constants.UPDATE_KIND_FILM,
    payload
});

// update film
export const updateKindFilmAction = (id, dataU) => async (dispatch) => {
    try {
        const res = await apiAdminKindFilm.fetchApiUpdateKindFilm(id, dataU);
        dispatch(actUpdateKindFilm({id ,update:res.data}))
    } catch (e) {
        console.log(e);
    }
}

export const actDeleteKindFilm = payload =>({
    type: constants.DELETE_KIND_FILM,
    payload
});



// TYPE FILM


export const actFetchTypeFilms = (payload) => ({
    type: constants.FETCH_TYPE_FILMS,
    payload
});

export const actFetchsTypeRequest = () => async (dispatch) => {
    try {
        const res = await apiAdminTypeFilm.fetchApiListTypeFilm();
            const payload = res.data;
            dispatch(actFetchTypeFilms(payload));
    } catch (e) {
        console.log(e);
    }
}



export const actAddTypeFilm = payload => ({
    type: constants.ADD_TYPE_FILM,
    payload
});

// create film
export const createTypeFilmAction = (data) => async (dispatch) => {
    try {    
        const res = await apiAdminTypeFilm.fetchApiAddTypeFilm(data);
        dispatch(actAddTypeFilm(res.data));
    } catch (e) {
        console.log(e);
    }
}


export const actUpdateTypeFilm = payload => ({
    type: constants.UPDATE_TYPE_FILM,
    payload
});

// update film
export const updateTypeFilmAction = (id, dataU) => async (dispatch) => {
    try {
        const res = await apiAdminTypeFilm.fetchApiUpdateTypeFilm(id, dataU);
        dispatch(actUpdateTypeFilm({id ,update:res.data}))
    } catch (e) {
        console.log(e);
    }
}

export const actDeleteTypeFilm = payload =>({
    type: constants.DELETE_TYPE_FILM,
    payload
});



// EPISODE FILM


export const actFetchEposideFilms = (payload) => ({
    type: constants.FETCH_EPOSIDE_FILMS,
    payload
});

export const actFetchsEposideRequest = () => async (dispatch) => {
    try {
        const res = await apiAdminEposideFilm.fetchApiListEposideFilm();
            const payload = res.data;
            dispatch(actFetchEposideFilms(payload));
    } catch (e) {
        console.log(e);
    }
}



export const actAddEposideFilm = payload => ({
    type: constants.ADD_EPOSIDE_FILM,
    payload
});

// create film
export const createEposideFilmAction = (id ,data) => async (dispatch) => {
    try {    
        const res = await apiAdminEposideFilm.fetchApiAddEposideFilm(id,data);
        dispatch(actAddEposideFilm(res.data));
    } catch (e) {
        console.log(e);
    }
}


export const actUpdateEposideFilm = payload => ({
    type: constants.UPDATE_EPOSIDE_FILM,
    payload
});

// update film
export const updateEposideFilmAction = (id,idEdit, dataU) => async (dispatch) => {
    try {
        const res = await apiAdminEposideFilm.fetchApiUpdateEposideFilm(id,idEdit, dataU);
        dispatch(actUpdateEposideFilm({id ,idEdit,update:res.data}))
    } catch (e) {
        console.log(e);
    }
}

export const actDeleteEposideFilm = payload =>({
    type: constants.DELETE_EPOSIDE_FILM,
    payload
});


