import 'react-native-gesture-handler';
import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux
import ConfigStore from './SRC/store/ConfigStore';
import { Provider } from 'react-redux';

import { Test } from './SRC/actions/Action';

// importing Screens
import Quiz from './SRC/screens/Quiz';
import Result from './SRC/screens/Result';


const store = ConfigStore();
store.dispatch(Test())
const Stack = createStackNavigator();


class App extends React.Component {
   render() {
      return (
         <Provider store={store}>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen name="Quiz" component={Quiz} />
                  <Stack.Screen name="Result" component={Result} />
               </Stack.Navigator>
            </NavigationContainer>
         </Provider>
      )
   }
}

export default App;
