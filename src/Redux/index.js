// redux
import { combineReducers, createStore, applyMiddleware,compose } from 'redux';
// redux thunk
import thunk from 'redux-thunk';
// redux persist
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// Reducer admin
import InfoReducer from './Reducers/Admin/InfoReducer';
import FilmsReducer from './Reducers/Admin/FilmsReducer';
import KindFilmReducer from './Reducers/Admin/KindFilmReducer';
import TypeFilmReducer from './Reducers/Admin/TypeFilmReducer';
import EposideReducer from './Reducers/Admin/EposideReducer';
const rootReducer = combineReducers({
    // admin
    InfoReducer,
    FilmsReducer,
    KindFilmReducer,
    TypeFilmReducer,
    EposideReducer,
    // client
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);
// const persistor = persistStore(store);

export { store };