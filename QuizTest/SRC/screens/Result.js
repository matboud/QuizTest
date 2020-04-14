import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Result extends React.Component {
   render() {
      return (
         // eslint-disable-next-line react-native/no-inline-styles
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Result</Text>
            {
               <Button
                  title="click to switch"
                  onPress={() => this.props.navigation.navigate('Quiz')}
               />
            }
         </View>
      );
   }
}
