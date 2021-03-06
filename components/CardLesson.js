import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Button} from 'react-native'

export default  CardLesson = ({navigation, lesson}) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Lesson',lesson)} style={styles.CardLessonContainer}>
      <View style={styles.CardLesson}>
        <View style={styles.content} >
          <View style={styles.contentIcon} >
            <View style={styles.icon}>
              <Text style={styles.letter}>N</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.infotext}> Fecha original: {lesson.fecha} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  CardLessonContainer :{
    width: '100%',
    height: 80,
    marginBottom: 6,
    padding: 1
  },
  CardLesson:{
    width: '100%',
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderBottomWidth: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection:'row',
    
  },
  contentIcon:{
    flex: 2,
    height:'100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop:1
  },
  icon:{
    backgroundColor: 'green',
    height:'97%',
    width:'96%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingStart: '35%',
    paddingTop: '25%',
    
  },
  letter:{
    flex: 1,
    color:'white',
    fontSize: 25
  },
  info:{
    flex: 8,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingStart: 10,
  },
  infotext:{
    fontSize:18
  }
})

