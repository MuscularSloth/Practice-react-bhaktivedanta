import { GET_MEDIADATA_FAILURE, GET_MEDIADATA_REQUEST, GET_MEDIADATA_SUCCESS } from "./types"

export function requestMediadataAction() {
    return{
        type: GET_MEDIADATA_REQUEST,
    }
}

export function failureRequestMediadataAction(errorMessage) {
    return{
        type: GET_MEDIADATA_FAILURE,
        payload: errorMessage,
    }
}

export function successRequestMediadataAction(mediaData) {
    return{
        type: GET_MEDIADATA_SUCCESS,
        payload: mediaData,
    }
}