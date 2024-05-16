import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './App/Navigation/Tabnavigation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <ClerkProvider publishableKey={"pk_test_cG9wdWxhci1jb2x0LTQuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <SafeAreaView style={{flex:1}}>
        <StatusBar hidden/>
        <SignedIn>
          <NavigationContainer>
            <Tabnavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

