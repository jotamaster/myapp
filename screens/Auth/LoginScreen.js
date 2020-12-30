import React from 'react'
import { View, Text,Button } from 'react-native'
import { useDispatch } from "react-redux";
import { login } from '../../actions/auth';

export default LoginScreen =  () => {
    const dispatch = useDispatch()

    const handleLogin = () => {

        dispatch(login('jean','elcorreo','supertoken$%@^#'))
    }
    return (
        <View>
            <Text>Login</Text>
            <Button onPress={handleLogin} title={'ingresar'}/>
        </View>
    )
}
