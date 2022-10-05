import React from 'react';
import Reac, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db }from './firebase_config';
import Login from './vistas/login';
import Signup from './vistas/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { nativeViewHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

const Stack = createStackNavigator();

export default function App() {

  const [data,setdata] = useState({
    username:"",
    email:"",
    psw:"",
    createAt: new Date(),
  })

  const changeText = (key, value) =>{
    setdata({ ...data, [key]: value});
  }
  
  const Agregar = () => {
    if(data.psw != data.psw2) {
      Alert.alert('La contraseña debe de coincidir...!')
    }else if(data.username == '' || data.email == ''){
      Alert.alert('Nombre de usuario y/o email, son obligatorios!')
    }else{
      onsuspend(data);
    }
  }

  const onSend = async () => {
    const docRef = await addDoc(collection(db, 'usuarios'), data);
  }

  const oneUserDB = async () => {
    const docRef = doc(db, "usuarios", 'aZ')
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

