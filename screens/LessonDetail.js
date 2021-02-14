import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default  LessonDetail = ({ route, navigation }) => {
  const { fecha } = route.params;
  return (
    <View style={styles.main}>
      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Original date
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              November 10th 2021
            </Text>
          </View>
        </View>
        <View style={styles.newDate}>
        <View  >
            <Text style={styles.labelDate}>
             New date
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              November 11th 2021
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Teacher
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              Gustavo
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Unit
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              9 Going away
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Objective
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              Aprender y practivar el pasado simple
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Homework
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              Unid 9, from point 1 to 3.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Palabras Claves (Keywords)
            </Text>
          </View>
          <View  >
            <Text style={styles.valueDate}>
              Journey, travel
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.dates}>
        <View style={styles.originalDate}>
          <View  >
            <Text style={styles.labelDate}>
              Comments
            </Text>
          </View>
          <View style={styles.comments}  >
            <Text style={styles.valueDate}>
              Me falta repasar pronunciacion de Museum// miusiiam 
            </Text>
          </View>
        </View>
      </View>
      



    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    padding: 10
  },
  dates:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  originalDate:{
    flex:6,
    display: 'flex',
  },
  newDate:{
    flex:5,
    display: 'flex',
  },
  labelDate:{
    fontSize:22,
    fontWeight: 'bold'
  },
  valueDate:{
    fontSize:16
  },
  comments:{
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    padding:10
  }
})
