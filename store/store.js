import { combineReducers, createStore } from "redux";
import { StyleReducer} from '../reducers/StyleReducer'
import { AuthReducer} from '../reducers/AuthReducer'

const reducers = combineReducers({
    StyleReducer,
    AuthReducer
})

export const store = createStore(reducers)