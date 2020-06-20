import React from 'react'
import {View, Text} from 'react-native'

const HeaderComponent = ({text}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = {
  header: {
    height: 60,
    backgroundColor: 'darkslateblue',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
}

export default HeaderComponent