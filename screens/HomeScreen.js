import React from 'react'
import { View, Text, Button,TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'

export default HomeScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <View>
            <Text>HOla home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Salir"
                onPress={handleLogout}
            />
            <TextInput
                            
            />
        </View>
    )
}

