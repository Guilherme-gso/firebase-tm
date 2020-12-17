import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { StatusBar, View } from 'react-native';
import { themes } from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={themes.colors.background} />
      <Routes />
    </NavigationContainer>
  );
}
