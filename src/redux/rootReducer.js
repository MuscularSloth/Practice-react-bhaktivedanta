import { combineReducers } from "redux";
import { mediadataReducer } from './mediadata/mediadataReducer'

export const rootReducer = combineReducers({
    mediadataReducer,
});