import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderComponent = ({text, handlePress}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity
                    onPress={handlePress}
                    style={styles.button}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'darkslateblue',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  },

  button: {
    margin: 2,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'darkslateblue'
  },

  buttonText: {
      color: 'white'
  }
});

export default HeaderComponent;