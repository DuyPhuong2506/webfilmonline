import { toast } from 'react-toastify';
import { ACCESS_TOKEN } from './configUrl';
export const STATUS_SUCCESS = 200;
export const STATUS_VALIDATE = 422;
export const STATUS_AUTH = 401;
export const STATUS_FAIL = 500;
export const TOKEN_GHN = JSON.parse(localStorage.getItem(ACCESS_TOKEN));



export const alertErrors = (mess, time = null) => {
    return toast.error(mess, {
        position: "top-right",
        autoClose: time ? time : 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const alertSuccess = (mess, time = null) => {
    return toast.success(mess, {
        position: "top-right",
        autoClose: time ? time : 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}