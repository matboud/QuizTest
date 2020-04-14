import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Item extends React.Component {
   render() {
      return (
         <View style={{
            flexDirection: 'row',
            backgroundColor: '#20476840',
            justifyContent: 'space-between',
            paddingVertical: 13,
            borderRadius: 15,
            borderWidth: 5,
            paddingHorizontal: 20,
            borderColor: '#204768'
         }}>
            <View style={{ flex: 5, justifyContent: 'center'}}>
               <Text style={{color: 'white', fontSize: 20}}>The Botanical Grdens</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
               <View style={{width: 40, height: 40, backgroundColor: this.props.selected ? '#117eeb' : '', borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: this.props.selected ? 0 : 3, borderColor: '#204768'}}>
                  {
                     this.props.selected ? <Image source={require('../assets/check.png')} style={{width: 23, height: 23}} /> : <View />
                  }
               </View>
            </View>

         </View>
      );
   }
}
