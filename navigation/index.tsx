// import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
// import ModalScreen from '../screens/ModalScreen';
// import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const ROUTES = {
  Login: "Login",
  Register: "Register",
  Home: "Home",
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
      <Stack.Screen name={ROUTES.Register} component={RegisterScreen} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
