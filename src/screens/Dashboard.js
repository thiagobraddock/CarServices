import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import fonts from '../styles/fonts';

export function Dashboard() {

  const [temNome, setTemNome] = useState(false);

  function handleInputChange(value){
    setTemNome(!!value)  
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.wrapper}>
          <Text style={styles.titulo}>DASHBOARD</Text>
          <Text style={styles.emoji}>
            {temNome ? '😀' : '😶'}
          </Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={handleInputChange}
          />

          
        </View>

        <View style={{flexDirection: 'row', padding: 20}}>
          <View style={{backgroundColor: 'red', width: '50%', height: 250, margin: 8}}>
            <Text>1</Text>
          </View>
          <View style={{backgroundColor: 'blue', width: '50%', margin: 8}}>
          <Text>2</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
      // justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
    },
    titulo:{
        fontSize: 30, 
        fontFamily: fonts.header
    },
    emoji: {
      fontSize: 56
    },
    input:{
      fontSize: 24,
      borderBottomWidth: 3,
      borderColor: 'green',
      padding: 12,
    }
  
    });
  