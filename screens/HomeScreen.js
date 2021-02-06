import React, {useEffect, useState} from 'react'
import { View, Text, Button,TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import api from '../services/api'


export default HomeScreen = ({navigation}) => {

    //const [users,setUsers] = useState([])

    //  useEffect(() => {
    //     const getUsers = async () =>{
    //         let users  = await api.get('/api/users')
    //         setUsers(users.data)
    //     }
    //      getUsers()
    
    //  },[])


    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }


    
    return (
        <View>
            
            
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

