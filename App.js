import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SymptomSelectorScreen from './screens/SymptomSelectorScreen';
import RecommendedStrainsScreen from './screens/RecommendedStrainsScreen';

import BuddyBanner from './components/BuddyBanner';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Find Your Strains"
          component={RecommendedStrainsScreen}
          options={{ headerTitle: BuddyBanner }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;