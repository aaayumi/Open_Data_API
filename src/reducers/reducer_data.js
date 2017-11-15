import { FETCH_SUCCESS,FETCH_DATA } from "../actions/index";

export default function data ( state={}, action) {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {...state, data :action.payload};

        default:
            return state;
}
}