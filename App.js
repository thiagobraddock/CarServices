import React from 'react';
import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard';
import Routes from './src/routes/stack.routes';
import {
  useFonts,
  Roboto_900Black, 
  Roboto_300Light
} from '@expo-google-fonts/roboto';

import Rotas from './src/routes'

export default function App() {
  
  const [ fontes ] = useFonts({
    Roboto_300Light,
    Roboto_900Black
  });

  if(!fontes) 
    return <AppLoading />
    
  return (
    <Rotas />
  );
}


