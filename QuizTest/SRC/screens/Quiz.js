import React from 'react';
import {
   View,
   Text,
   SafeAreaView,
   StyleSheet,
   TouchableOpacity,

} from 'react-native';
import Item from '../components/Item';
import { data } from '../config/data';
import { connect } from 'react-redux';

import { Test, clickedQuestion } from '../actions/Action';

class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         progressBar: 40,
      }
   }
   render() {
      console.log('Quiz> prediction', this.props.prediction)
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
                  <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#8d97bf' }}>Question {this.props.counter}<Text style={{ fontSize: 18, fontWeight: '100' }}>/{this.props.data.length}</Text></Text>
               </View>

               <View style={styles.qustion}>
                  <Text style={{ color: '#ecf0f1', fontSize: 24 }}>{this.props.currentQuestion.question}</Text>
               </View>
            </View>
            <View style={styles.body}>
               {
                  this.props.currentQuestion.answers.map((answer) => (
                     <View style={{ paddingVertical: 5 }}>
                        <TouchableOpacity onPress={() => {
                           this.props.counter === this.props.data.length ?
                              this.props.navigation.navigate('Result') :
                              this.props.clickedQuestion(this.props.currentQuestion.question, answer, this.props.currentQuestion.right_answer, this.props.data, this.props.counter)
                        }}>
                           <Item answer={answer} />
                        </TouchableOpacity>
                     </View>
                  ))
               }
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

const mapStateToProps = (state) => ({
   data: state.data,
   currentQuestion: state.currentQuestion,
   counter: state.counter,
   prediction: state.prediction,
})

export default connect(mapStateToProps, {
   Test,
   clickedQuestion
})(Quiz)




