import {types} from "../types/types";

const initialState = {
    color: '#000',
    backgroundColor: '#fff',
    active:false
}

export const StyleReducer = (state=initialState,action) =>{
    switch (action.type) {
        case types.themeDark :
            return {
                color:  action.active ? '#fff' : '#000',
                backgroundColor: action.active ? '#000' : '#fff',
                active: action.active
            }
            break;
        default:
            return state;
            break;
    }
}