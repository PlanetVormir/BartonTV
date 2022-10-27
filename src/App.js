import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ContentScreen from './screens/ContentScreen';
import PlayerScreen from './screens/PlayerScreen';
import OptionsScreen from './screens/OptionsScreen';
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
        <Stack.Screen name={'search'} options={{headerShown: false}}>
          {props => <SearchScreen {...props} api={API} />}
        </Stack.Screen>
        <Stack.Screen name={'content'} options={{headerShown: false}}>
          {props => <ContentScreen {...props} api={API} />}
        </Stack.Screen>
        <Stack.Screen name={'player'} options={{headerShown: false}}>
          {props => <PlayerScreen {...props} api={API} />}
        </Stack.Screen>
        <Stack.Screen name={'options'} options={{headerShown: false}}>
          {props => <OptionsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
