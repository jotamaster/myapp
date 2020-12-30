import React from 'react'
import { View, Text,Button,TextInput, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'
import { useDispatch } from "react-redux";
import { login } from '../../actions/auth';

export default LoginScreen =  () => {
    const dispatch = useDispatch()

    const handleLogin = () => {

        dispatch(login('jean','elcorreo','supertoken$%@^#'))
    }
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/back.png')} style={styles.back}>
            <Text style={styles.title}>LOGIN</Text>
            
            <Text style={styles.label}>Usuario</Text>
            <TextInput
                style={styles.textInput}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.textInput}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                <Text style={styles.btnText} >Ingresa</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles  = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        display: 'flex',
        height: '100%',
    },
    back:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    textInput:{
        display: 'flex',
        width: '90%',
        height: 35,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#3335',
        color: 'white',
        paddingHorizontal: 22
    },
    label:{
        display: 'flex',
        color: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: '5%'
    },
    btn:{
        width: '90%',
        height: 35,
        backgroundColor: '#00417b',
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    btnText:{
        color:'white'
    },
    title: {
        marginBottom: 30,
        color: 'white',
        fontSize: 20
    }
})
