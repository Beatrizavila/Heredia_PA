import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import { alignContent, flex, flexDirection, widht } from 'styled-system';


function Login() {
        const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>Inicio de sesión</Text>
            </View>
            <View style={styles.text2}>
                <Text>¿No estás registrado?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={styles.signupText}>¡Registrate!</Text></TouchableOpacity>
            </View>

            {/* Username or Email Input Field */}
            <View style={styles.buttonStyle}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _Light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color:"gray.300"
                                }}
                            />
                        }
                        variant="outline"
                        placeholder="Nombre de usuario o correo electrónico"
                        _Light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholdertEXTcoLOR: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Password Input Field */}
            <View style={styles.buttonStylex}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name= "key" />}
                                size="sm"
                                m={2}
                                _Light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }
                        variant="outline"
                        secureTextEntry={true}
                        placeholder="Contraseñas"
                        _Light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placerholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
            </View>

            {/* Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    Ingresar
                </Button>
            </View>
            
            {/* Line */}
            <View style={styles.lineStyle}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{widht: 50, textAlign: 'center'}}>O</Text>
                </View>
                <View style={{flex: 1, height: 1, bakcgroundColor: 'black'}}/>
            </View>
        </View>
    )
};


const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' ,
    },
    LoginText: {
        marginTop: 100,
        fontSize:30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:5
    },
    signupText: {
        fontWeight: 'bold'
    },
    emailField: {
        marginTop:30,
        marginLeft:15
    },
    emailInput: {
        marginTop: 10,
        marginRight: 5
    },
    buttonStyle: {
        marginTop:30,
        marginLeft: 15,
        marginRight: 15
    },
    buttonStyleX: {
        marginTop:12,
        marginLeft:15,
        marginRight:15
    },
    buttonDesign: {
        backgroundColor: '#0263fd'
    },
    lineStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
        alignItems: 'center'
    },
    imageStyle: {
        widht: 80,
        height:80,
        marginLeft:20,
    },
    boxStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-around'
    },
});