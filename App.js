import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SymptomSelectorScreen from './screens/SymptomSelectorScreen';
import RecommendedStrainsScreen from './screens/RecommendedStrainsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Symptom Selector"
          component={SymptomSelectorScreen}
        />
        <Stack.Screen name="Recommended Strains"
          component={RecommendedStrainsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;