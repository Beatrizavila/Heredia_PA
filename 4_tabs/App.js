import { NavigatioinContainer } from '@react-navigation/native';
import { createnNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativrStackNavigato();

import ProductosView from './vistas/productos';
import ProductosAdd from './vistas/productos_add'

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='productos' component={ProductosView} options={{
        title: "Listado de Productos",
        headerTitleAlign: "center",
      }}/>
    <Stack.Screen name='productos_add' component={ProductosAdd}/>
    </Stack.Navigator>
  )
}

function App(){
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App;
