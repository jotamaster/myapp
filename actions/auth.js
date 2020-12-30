import { types } from "../types/types"


export const login = (name,email,token) =>{

    return {
        type: types.login,
        payload:{
            name,
            email,
            token
        }
    }

}

export const logout = () => {

    return {
        type: types.logout
    }

}