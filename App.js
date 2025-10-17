import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Registro from './componentes/Registro';
import Perfil from './componentes/Perfil';
import Splash from './componentes/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <StackScreen 
                    name = "Splash"
                    component={Splash}
                    options={
                            {headerShow: false}
                    } 
                />
                <StackScreen 
                    name = "Login"
                    component={Login}
                    options={
                            {headerShow: false}
                    } 
                />
                <StackScreen 
                    name = "Registro"
                    component={Registro}
                    options={
                            {headerShow: false}
                    } 
                />
                <StackScreen 
                    name = "Home"
                    component={Home}
                    options={
                            {headerShow: false}
                    } 
                />
                <StackScreen 
                    name = "Perfil"
                    component={Perfil}
                    options={
                            {headerShow: false}
                    } 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}