import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Item extends React.Component {
   render() {
      const props = this.props;
      return (
         <View style={{
            flexDirection: 'row',
            backgroundColor: '#ecf0f110',

            justifyContent: 'space-between',
            paddingVertical: 13,
            borderRadius: 15,
            borderWidth: 5,
            paddingHorizontal: 20,
            borderColor:
               props.result ?
                  props.right ?
                     '#18d96f'
                     :
                     '#e74c3c'
                  :
                  props.selected ?
                     '#204768'
                     : '#204768'
         }}>
            <View style={{ flex: 5, justifyContent: 'center' }}>
               <Text style={{ color: props.result ? '#252d4a' : 'white', fontSize: 20 }}>{this.props.answer}</Text>
               {
                  this.props.wrong ? <Text style={{ color: '#2a8bed' }} >testing right answer</Text> : <View />
               }
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
               <View style={{
                  width: 40, height: 40,
                  backgroundColor: props.result ? props.right ? '#02d664' : '#ff3752' : props.selected ? '#117eeb' : '',
                  borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: this.props.selected ? 0 : 3, borderColor: props.result ? props.right ? '#02d664' : '#ff3752' : props.selected ? '#252d4a' : '#204768',
               }}>
                  {
                     props.result ?
                        props.right ?
                           <Image source={require('../assets/check.png')} style={{ width: 23, height: 23 }} />
                           : <Image source={require('../assets/wrong.png')} style={{ width: 23, height: 23 }} />
                        : props.selected ?
                           <Image source={require('../assets/check.png')} style={{ width: 23, height: 23 }} />
                           : <View />
                  }
               </View>
            </View>

         </View>
      );
   }
}
