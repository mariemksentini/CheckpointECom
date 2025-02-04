import AuthReducer from "./AuthReducer";
import {combineReducers} from 'redux'
import ErrorsReducer from "./ErrorsReducer";
const rootReducer = combineReducers({AuthReducer, ErrorsReducer})

export default rootReducer