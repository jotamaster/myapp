import {types} from "../types/types";

const initialState = {
    name:'',
    email:'',
    token:''
}

export const AuthReducer = (state=initialState,action) =>{
    switch (action.type) {
        case types.login :
            return {
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token,
            }
            break;
        case types.logout :
            return {
                name:'',
                email:'',
                token:'',
            }
        default:
            return state;
            break;
    }
}