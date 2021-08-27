import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './src/screens/Dashboard';
import { Welcome } from './src/screens/welcome';
import {Teko_700Bold, Teko_400Regular,useFonts} from '@expo-google-fonts/teko';
import {Roboto_900Black, Roboto_300Light} from '@expo-google-fonts/roboto';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';

export default function App() {
  
  const [ fontes] = useFonts({
    PressStart2P_400Regular,
    Roboto_900Black
  })

  if(!fontes)
  return(
    <Text>Erro</Text>
  )
  
  return (
    <Welcome />
    // <Dashboard />
  );
}


