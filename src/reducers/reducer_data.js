import { ADD_DATA } from "../actions/index";

export default function( state=[], action) {
	switch(action.type) {
		case ADD_DATA:
		    return [action.payload.data, ...state];
	}
	return state;
}