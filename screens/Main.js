import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from '../store/store'
import { StyleSheet, Text, View,Button } from 'react-native';
import { themeDark } from '../actions/styles';


const ButtonCustom = () =>{

  const {color, active, backgroundColor} = useSelector(state => state.StyleReducer)

  console.log(backgroundColor)
  

  const dispatch = useDispatch()

  const handleTheme = () =>{
    dispatch(themeDark(!active))
  }

  const title = active ? 'desactivar modo dark' : 'activar modo dark'

  

  return(
    <View style={[styles.container,{backgroundColor: backgroundColor, color: color }]}>
        <Text style={{color:color}}>hola que pasa  </Text>
        <StatusBar style="auto" />
        <View>
          <Button onPress={handleTheme} title={title}/>
        </View>
      </View>
  )
}

export default () => {
  return (
    <Provider store={store}>
        <ButtonCustom/>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});