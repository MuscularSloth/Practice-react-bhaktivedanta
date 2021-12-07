import { GET_MEDIADATA_FAILURE, GET_MEDIADATA_REQUEST, GET_MEDIADATA_SUCCESS } from "../types"

const initialState= {
    isLoading: false,
    isError: false,
    errorMessage: null,
    data: []
}

export const mediadataReducer = (state = initialState, action) => {
    // console.log('action.type >> ', action.type)
    // console.log('action.payload >> ', action.payload)
    switch (action.type) {
        case GET_MEDIADATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_MEDIADATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        case GET_MEDIADATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                errorMessage: null,
                data: action.payload,
            }
        default:
            return state;
    }
}