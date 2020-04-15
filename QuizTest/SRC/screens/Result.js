import React from 'react';
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Dimensions,
   Animated
} from 'react-native';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { totalResult, clickedQuestion } from '../actions/Action';

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = 120;
const LIVE_CARD_HEIGHT = 210;

const LIVE_CARD_TOP = 110;
const LIVE_CARD_TOP_MIN = 0;

const windowWidth = Dimensions.get('window').width;
class Result extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         scrollY: new Animated.Value(0),
         right: 0
      }
   }

   componentDidMount() {
      this.props.totalResult(this.props.prediction)
   }

   render() {
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
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>{this.props.totalRight}</Text>
                           <Text style={{ fontSize: 17, color: '#ecf0f1' }}>Score</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ecf0f1' }}>{this.props.prediction.length - this.props.totalRight}</Text>
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
                        <View style={{ height: 200, backgroundColor: this.props.percentage < 50 ? '#ff415a' : '#15da72', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                           <Text style={{ fontSize: 35, color: 'white' }}>Your Score:</Text>
                           <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>{parseInt(this.props.percentage)}%</Text>
                        </View>
                     </Animated.View>
                  }
               </Animated.View>
               {
                  <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                     {
                        this.props.prediction.map((prediction) => (

                           <View style={{ paddingVertical: 5 }}>
                              {
                                 prediction.choosen_answer === prediction.right_answer ? (
                                    <Item answer={prediction.choosen_answer} result right />
                                 )
                                    : <Item answer={prediction.choosen_answer} result wrong={prediction.right_answer} />
                              }
                           </View>
                        ))
                     }
                  </View>
               }
               <View style={{ height: 30 }}/>
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

const mapStateToProps = (state) => ({
   data: state.data,
   prediction: state.prediction,
   percentage: state.percentage,
   totalRight: state.totalRight
})

export default connect(mapStateToProps, {
   totalResult,
   clickedQuestion
})(Result);