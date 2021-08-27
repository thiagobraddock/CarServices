import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import fonts from '../styles/fonts';
export function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.titulo}>DASHBOARD</Text>
      </View>
      </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#81DC60',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
    },
    titulo:{
        fontSize: 30, 
        fontFamily: fonts.destaque
    }
  
    });
  