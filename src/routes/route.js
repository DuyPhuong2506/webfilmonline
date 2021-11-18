import Dashboard from "../layouts/Admin/Dashboard/Dashboard"
import Home from "../layouts/Pages/Home/Home"
import AddKindOFFilm from "../layouts/Admin/KindOFFilm/AddKindOFFilm"
import ListKindOFFilm from "../layouts/Admin/KindOFFilm/ListKindOFFilm"
import ListFilmAdmin from "../layouts/Admin/Film/ListFilmAdmin"
import AddEditFilm from "../layouts/Admin/Film/AddEditFilm"
import FilmSerial from "../layouts/Pages/FilmSerial"
import FilmOdd from "../layouts/Pages/FilmOdd"
import WatchFilm from "../layouts/Pages/WatchFilm"
import FilmSearched from "../layouts/Pages/FilmSearched"

import AddEditTypeFilm from "../layouts/Admin/TypeFilm/AddTypeFilm"
import AddTypeFilm from "../layouts/Admin/Film/AddTypeFilm"
import AddEposideFilm from "../layouts/Admin/Film/AddEposideFilm"
import ListEposideFilm from "../layouts/Admin/Film/ListEposideFilm"
import ListTypeFilm from "../layouts/Admin/TypeFilm/ListTypeFilm"
import FilmDetail from "../layouts/Pages/FilmDetail"
import UploadImage from "../layouts/Admin/Film/UploadImage"
import ListConfig from "../layouts/Admin/Config/ListConfig"
import ListUser from "../layouts/Admin/User/ListUser/ListUser"
import AddConfig from "../layouts/Admin/Config/AddConfig"
import AddUsers from "../layouts/Admin/User/AddUser/AddUser"
import FilmType from "../layouts/Pages/FilmType"

export const adminRoutes = [{
        path: '/admin/dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/admin/kindoffilm/add',
        component: AddKindOFFilm,
        exact: true
    },
    {
        path: '/admin/kindoffilm',
        component: ListKindOFFilm,
        exact: true
    },
    {
        path: '/admin/kindfilm/edit/:id',
        component: AddKindOFFilm,
        exact: true
    },

    {
        path: '/admin/film/add',
        component: AddEditFilm,
        exact: true
    },
    {
        path: '/admin/film/edit/:id',
        component: AddEditFilm,
        exact: true
    },
    {
        path: '/admin/film/upload/:id',
        component: UploadImage,
        exact: true
    },
    {
        path: '/admin/film',
        component: ListFilmAdmin,
        exact: true
    },

    {
        path: '/admin/typefilm/add',
        component: AddEditTypeFilm,
        exact: true
    },
    {
        path: '/admin/typefilm/edit/:id',
        component: AddEditTypeFilm,
        exact: true
    },
    {
        path: '/admin/config',
        component: ListConfig,
        exact: true
    },
    {
        path: '/admin/config/add',
        component: AddConfig,
        exact: true
    },
    {
        path: '/admin/user',
        component: ListUser,
        exact: true
    },
    {
        path: '/admin/user/add',
        component: AddUsers,
        exact: true
    },
    {
        path: '/admin/typefilm',
        component: ListTypeFilm,
        exact: true
    },
    {
        path: '/admin/film/choose-type/:id',
        component: AddTypeFilm,
        exact: true
    },
    {
        path: '/admin/film/choose-episode/:id',
        component: ListEposideFilm,
        exact: true
    },
    {
        path: '/admin/film/episode-film/:id/add',
        component: AddEposideFilm,
        exact: true
    },
    {
        path: '/admin/film/episode-film/:id/:idEdit/edit',
        component: AddEposideFilm,
        exact: true
    },

]

export const clientRoutes = [{
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/phim-bo',
        component: FilmSerial,
        exact: true
    },
    {
        path: '/phim-le',
        component: FilmOdd,
        exact: true
    },
    {
        path: '/phim/the-loai/:slug',
        component: FilmType,
        exact: true
    },
    {
        path: '/film/:name/:id',
        component: FilmDetail,
        exact: true
    },
    {
        path: '/phim-bo/:name/:id',
        component: WatchFilm,
        exact: true
    },
    {
        path: '/phim-le/:name/:id',
        component: WatchFilm,
        exact: true
    },
    {
        path: '/search/:name',
        component: FilmSearched,
        exact: true
    },


]
export const protectedClientRoutes = [
    // {
    //     path: '/purchase',
    //     component: MainAccount,
    //     exact: true
    // },
    // {
    //     path: '/account/profile',
    //     component: MainAccount,
    //     exact: true
    // },
    // {
    //     path: '/account/password',
    //     component: MainAccount,
    //     exact: true
    // }
]