import React from 'react';
import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard';

import {
  useFonts,
  Roboto_900Black, 
  Roboto_300Light
} from '@expo-google-fonts/roboto';


export default function App() {
  
  const [ fontes ] = useFonts({
    Roboto_300Light,
    Roboto_900Black
  });

  if(!fontes) 
  { 
    return (
      <AppLoading />
    );
    
      // verificar propriedades
  }
  return (
    <Dashboard />
  );
}


