import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';
import { Welcome } from '../screens/welcome'

const Stack = createNativeStackNavigator();

const AppRoutes = () => (
        <Stack.Navigator
          // headerMode="none"
          screenOptions={{ headerStyle: { backgroundColor: '#333' } }}

          
        >
       
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerTitle: 'Test', headerShown: false}}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={({ route }) => ({ title: route.params.name })}
          />
       


        </Stack.Navigator>
  
)

export default AppRoutes;