import { combineReducers, createStore } from "redux";
import { StyleReducer} from '../reducers/StyleReducer'

const reducers = combineReducers({
    StyleReducer
})

export const store = createStore(reducers)