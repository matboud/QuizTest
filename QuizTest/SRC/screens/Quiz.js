import React from 'react';
import {
   View,
   Text,
   Button,
   SafeAreaView,
   StyleSheet,
   ScrollView,

} from 'react-native';
import Item from '../components/Item';

export default class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         progressBar: 40,
      }
   }
   render() {
      return (
         // eslint-disable-next-line react-native/no-inline-styles
         <SafeAreaView style={styles.safeContainer}>
               <View style={styles.header}>
                  <View style={styles.containerProgress}>
                     <View style={[styles.progress, { width: `${this.state.progressBar}%` }]}>
                        <Text style={{ color: 'white', fontSize: 20, }}>{this.state.progressBar}%</Text>
                     </View>
                  </View>
                  <View style={{ marginTop: 30 }}>
                     <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8d97bf' }}>Question 1<Text style={{ fontSize: 18, fontWeight: '100' }}>/10</Text></Text>
                  </View>

                  <View style={styles.qustion}>
                     <Text style={{ color: '#ecf0f1', fontSize: 24 }}>What attraction in Montreal is one of the largest in the World?</Text>
                  </View>
               </View>

               <View style={styles.body}>
                  <View style={{ paddingVertical: 5 }}>
                     <Item selected />
                  </View>
                  <View style={{ paddingVertical: 5 }}>
                     <Item />
                  </View>
                  <View style={{ paddingVertical: 5 }}>
                     <Item />
                  </View>
                  <View style={{ paddingVertical: 5 }}>
                     <Item />
                  </View>
               </View>
         </SafeAreaView>
      );
   }
}


const styles = StyleSheet.create({
   safeContainer: {
      flex: 1,
      backgroundColor: '#252d4a',
   },
   header: {
      width: '100%',
      paddingHorizontal: 25,
      paddingVertical: 30,
      flex: 1,
      // backgroundColor: 'red'
   },
   containerProgress: {
      borderWidth: 4,
      borderColor: '#8d97bf',
      borderRadius: 50,
      overflow: 'hidden'
   },
   progress: {
      backgroundColor: '#b36efb',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
   },
   qustion: {
      paddingVertical: 30
   },

   body: {
      flex: 1.8,
      paddingHorizontal: 25,
      // backgroundColor: 'aqua',
      justifyContent: 'center',
   }

})




