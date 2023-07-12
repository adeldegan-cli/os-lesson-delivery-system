import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../config/colors';
import { QuestionForm } from '../screens/QuestionForm';
import { HomeScreen } from '../screens/HomeScreen';
import { NewQuizScreen } from '../screens/NewQuizScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home Screen'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white }
      }}
    >
      <Stack.Screen name='Home Screen' component={HomeScreen} />
      <Stack.Screen name='Question Form' component={QuestionForm} />
      <Stack.Screen name='New Quiz Screen' component={NewQuizScreen} />
    </Stack.Navigator>
  );
};
