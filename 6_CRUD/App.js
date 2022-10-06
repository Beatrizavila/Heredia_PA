
import React, { useState } from 'react';
import { db } from './db/firebase';

import { StyleSheet, View, Button, ScrollView, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';

import Login from './vistas/login';
import Signup from './vistas/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from 'styled-system';

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
      onSend(data);
    }
  }

  const onSend = async () => {
    const docRef = await addDoc(collection(db, 'usuarios'), data);
  }

  const oneUserDB = async () => {
    const docRef = doc(db, "usuarios", 'AIzaSyC1SBcscu_hrUI0jBMUoDqsMqqOHhUJSt8');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    }else{
      console.log("No such document");
    }
  };

  const allUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));

    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }

  return (
    /*<Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>*/

    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View>
        <Input placeholder='Nombre usuario' onChangeText={(value) => changeText('username', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Correo electrónico' onChangeText={(value) => changeText('email', value)}/>
      </View>
      <View>
        <Input placeholder='Contraseña' onChangeText={(value) => changeText('psw', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Input placeholder='Confirmar contraseña' onChangeText={(value) => changeText('psw2', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Button
          onPress={() => {
            Agregar()
          }}
          title='Enviar datos'
          color='#841584'
          />
      </View>
      <View>
        <Button
          onPress={() => {
            oneUserDB()
          }}
          title='Ver datos'
          color='#841584'
          />
      </View>
    </ScrollView>
  );
  
}

/*export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}*/

