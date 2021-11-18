import * as Types from '../../Contants/Admin/TBConstants';


var initialState = [];
const KindFilmReducer = (state = initialState, { type, payload }) => {
    var index = -1;
    switch (type) {
        case Types.FETCH_KIND_FILMS:
            state = payload;
            return [...state];
        case Types.ADD_KIND_FILM:
            state.push(payload);
            return [...state];
        case Types.UPDATE_KIND_FILM:
            index = state.findIndex(film => film.id === payload.id);
            console.log(index , payload.update);
            state[index] = payload.updated;
            return [state];
        default: return [];
    }
};

export default KindFilmReducer;