import axios from "axios";
import {
    failureRequestMediadataAction,
    requestMediadataAction,
    successRequestMediadataAction,
} from "./actions"

const API_PATH = 'http://bhaktivedantaacademy.ru/wp-json/media/get_media?p=1';

export const getMediadataAsyncAction = () => {
    return (dispatch) => {
        dispatch(requestMediadataAction())
        axios.get(API_PATH).then(
            success => {
                // console.log('success media data >>> ', success.data.media);
                dispatch(successRequestMediadataAction(success.data.media));
            },
            error => {
                if (error.response) {
                    console.log('error.response.data', error.msg);
                    dispatch(failureRequestMediadataAction(error.msg));
                } else if (error.request) {
                    console.log('error.request', error.request);
                } else {
                    console.log('error.message', error.message);
                }
            }
        )
    }
}