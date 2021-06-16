import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Routes from './Routes';
import AppLoading from 'expo-app-loading';

import {useFonts, Prompt_500Medium, Prompt_600SemiBold} from '@expo-google-fonts/prompt';




export default function App(){

  let [fontsLoaded] = useFonts({
    Prompt_600SemiBold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (

    <>
      <StatusBar style="light" backgroundColor="black" translucent={true} />
      <Routes></Routes>
    </>
  )
}

