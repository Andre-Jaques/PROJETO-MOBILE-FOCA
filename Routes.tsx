
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Cadastrar from './Cadastrar';
import EsqueceuSenha from './EsqueceuSenha';
import LandingPage from './LandingPage';
import Login from './Login';
import TelaInicial from './TelaInicial';


export default function Routes(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>

            <Stack.Navigator initialRouteName="TelaInicial">

                <Stack.Screen
                name="TelaInicial" 
                component={TelaInicial}
                options= {{header: () => null}}></Stack.Screen>

                <Stack.Screen
                name="LandingPage" 
                component={LandingPage}
                options= {{header: () => null}}></Stack.Screen>
                
                <Stack.Screen
                name="Login" 
                component={Login}
                options= {{header: () => null}}></Stack.Screen>

                <Stack.Screen
                name="Cadastrar" 
                component={Cadastrar}
                options= {{header: () => null}}></Stack.Screen>

                <Stack.Screen
                name="EsqueceuSenha" 
                component={EsqueceuSenha}
                options= {{header: () => null}}></Stack.Screen>


            </Stack.Navigator>

        </NavigationContainer>
    )
}