import { combineReducers } from 'redux';
import DataReducer from "./reducer_data";

const rootReducer = combineReducers({
  data: DataReducer
});

export default rootReducer;
