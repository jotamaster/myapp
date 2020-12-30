import React from 'react'
import { View, Text, Button } from 'react-native'

export default HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>HOla home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

