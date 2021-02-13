import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useSelector } from "react-redux";
import { StyleSheet } from 'react-native';
import RegisterScreen from './Auth/RegisterScreen';
import LoginScreen from './Auth/LoginScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import LessonDetail from './LessonDetail';
import CardLesson from '../components/CardLesson';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        options={{
          title:'Lessons',
          headerTitleStyle: { alignSelf: 'center' }
        }} 
        component={HomeScreen} 
      />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Lesson" component={LessonDetail} />
    </Stack.Navigator>
  )
}

const AuthStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)
}




export default  Main = () => {
  const user = useSelector(state => state.AuthReducer)
  return (
      <NavigationContainer>
        {
          <HomeStack/>
          // !!user.name 
          // ? <HomeStack/>
          // : <AuthStack/>
        }
          
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});