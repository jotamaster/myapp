import React, {useEffect, useState} from 'react'
import { View, Text, Button,TextInput,StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import api from '../services/api'

import CardLesson from "../components/CardLesson";


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
        <View style={styles.container}>

            {/* <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Salir"
                onPress={handleLogout}
            /> */}
            <CardLesson navigation={navigation}></CardLesson>
            <CardLesson navigation={navigation}></CardLesson>
            <CardLesson navigation={navigation}></CardLesson>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    paddingHorizontal: 5
  }
})

