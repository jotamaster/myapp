import React, {useEffect, useState} from 'react'
import { View, Text, Button,TextInput,StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { FloatingAction } from 'react-native-floating-action'
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
    const actions = [
        {
            text:"Teachers",
            name:"bt_teachers",
            positionz:2,
            icon:require("../assets/presentation.png")
  
        },
        {
            text:"Plans",
            name:"bt_plans",
            positionz:2,
            icon:require("../assets/planning.png")
  
        },
        {
            text:"My profile",
            name:"bt_my_profile",
            positionz:2,
            icon:require("../assets/user.png")
  
        },
        {
          text: "Add new lesson",
          name: "bt_create_new_lesson",
          position: 1,
          icon:require("../assets/blackboard.png")
          
        },
        
      ];

    const handleActionFloatButton = (name) =>{
        console.log('el nombre es ', name)
    
        switch (name) {
          case 'bt_create_new_lesson':
            
            break;
        
          default:
            break;
        }
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
            <FloatingAction
                actions={actions}
                color={'rgba(255, 255, 255, 1)'}
                overlayColor={'rgba(68, 68, 68, 0)'}
                floatingIcon={require("../assets/iconmenu.png")}
                onPressItem={name => handleActionFloatButton(name)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    paddingHorizontal: 5,
    flex:1
  }
})

