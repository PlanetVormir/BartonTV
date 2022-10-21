import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RedSkull from 'redskulljs';

const API = new RedSkull();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'home'} options={{headerShown: false}}>
          {props => <HomeScreen {...props} api={API} />}
        </Stack.Screen>
        <Stack.Screen
          name={'search'}
          options={{headerShown: false}}
          initialParams={{query: 'house'}}>
          {props => <SearchScreen {...props} api={API} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
