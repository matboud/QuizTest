import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   Dimensions,
   Animated
} from 'react-native';
import Item from '../components/Item';




const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 120;
const LIVE_CARD_HEIGHT = 210;

const LIVE_CARD_TOP = 110;
const LIVE_CARD_TOP_MIN = 0;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class Result extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         total: {

         },
         scrollY: new Animated.Value(0)
      }
   }

   render() {
      const total = this.props.total;

      const headerHeight = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
         extrapolate: 'clamp'
      })

      const liveCardHeight = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [LIVE_CARD_TOP_MIN, LIVE_CARD_TOP],
         extrapolate: 'clamp'
      })

      const headerZIndex = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [0, 0, 1],
         extrapolate: 'clamp'
      })

      const opacityTitle = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
         outputRange: [1, 0],
         extrapolate: 'clamp'
      })

      const headerTitleBottom = this.state.scrollY.interpolate({
         inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 120, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 120],
         outputRange: [-70, 0, 0],
         extrapolate: 'clamp'
      })



      return (
         <View style={styles.container}>
            <Animated.View style={[
               styles.header,
               {
                  width: windowWidth,
                  height: headerHeight,
                  position: 'absolute',
                  zIndex: headerZIndex
               }
            ]}>
               <View
                  style={{ flex: 1, alignItems: 'center' }}
               >
                  <Animated.View style={{ opacity: opacityTitle, width: '100%', height: HEADER_MIN_HEIGHT, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 20 }}>
                     <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#ecf0f1' }}>Results</Text>
                  </Animated.View>

                  <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom, flexDirection: 'row', }}>
                     <View style={{ flexDirection: 'row', width: '100%', height: HEADER_MIN_HEIGHT, alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>9/10</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Score</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>4</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Wrong</Text>
                        </View>
                     </View>
                  </Animated.View>
               </View>
            </Animated.View>

            <ScrollView
               scrollEventThrottle={16}
               onScroll={
                  Animated.event(
                     [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                  )
               }
               showsVerticalScrollIndicator={false}
               style={{
                  flex: 1,
               }}
            >

               <Animated.View style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  marginTop: HEADER_MAX_HEIGHT - LIVE_CARD_HEIGHT / 2,

               }}>
                  {
                     <Animated.View style={{
                        paddingTop: liveCardHeight
                     }}>
                        <View style={{ height: 200, backgroundColor: 40 > 30 ? '#ff415a' : '#15da72', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                           <Text style={{ fontSize: 35, color: 'white' }}>Your Score:</Text>
                           <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>47</Text>
                        </View>
                     </Animated.View>
                  }
               </Animated.View>
               {
                  <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result wrong />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result wrong />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result wrong />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result wrong />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                     <View style={{ paddingVertical: 5 }}>
                        <Item result right />
                     </View>
                  </View>
               }
               <View style={{ height: 30 }}>

               </View>

            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   // FULL PAGE
   container: {
      flex: 1,
      backgroundColor: "#ecf0f1"
   },

   header: {
      // flex: 1,
      backgroundColor: '#252d4a',
      // paddingTop: 60
   },
   subtitle: {
      color: '#bdc3c7',
      fontSize: 23
   },
   title: {
      color: 'white',
      fontSize: 55,
      fontWeight: '500'
   }
})


export default Result;