import React, {useEffect, useState} from 'react'
import { View, Text, Button,TextInput,StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import api from '../services/api'

import CardLesson from "../components/CardLesson";


export default HomeScreen = ({route,navigation}) => {

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

    let fakedata = {
        fecha: ' 10 noviembre 2021',
        teacher: 'juanito'
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
            <CardLesson lesson={fakedata} navigation={navigation}></CardLesson>
            <CardLesson lesson={fakedata} navigation={navigation}></CardLesson>
            <CardLesson lesson={fakedata} navigation={navigation}></CardLesson>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    paddingHorizontal: 5
  }
})

