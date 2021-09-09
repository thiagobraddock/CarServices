import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
export function Welcome() {

    const navigation= useNavigation()
    
    function handleStart(){
      navigation.navigate('Dashboard', { name: 'Thiago' })
    }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
          <Image 
          source={require('../assets/title.png')}
          style={styles.logo}
          resizeMode='contain'
          />

          <Image 
          source={require('../assets/simbol1.png')}
          style={styles.logo}
          resizeMode='contain'
          />

          <Image 
          source={require('../assets/simbol2.png')}
          style={styles.logo}
          resizeMode='contain'
          />

          <TouchableOpacity style={styles.signBtn}
            onPress={ handleStart }
          >
            <AntDesign 
              name="login"
              style={{fontSize: 40}}
            />
            <Text style={styles.signBtnText}>SIGN IN</Text>
          </TouchableOpacity>          
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81DC60',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').width * 0.20,
    width: Dimensions.get('window').width
  },
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  signBtn: {
    backgroundColor: 'white', 
    padding:10,
    borderRadius: 40,
    width:200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  signBtnText:{
    textAlign: 'center',
    fontSize: 18
  }
});
