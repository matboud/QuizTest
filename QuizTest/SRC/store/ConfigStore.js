import { createStore, applyMiddleware } from 'redux';

const data = [];
const currentQuestion = {};
const counter = 0;
const prediction = [];

// since we ll handle simple data and we ll not combine stores, i choosed to add the reducer with config
const myData = (state = { prediction, data, currentQuestion, counter }, action) => {
   switch (action.type) {
      case 'TEST':
         console.log('in the test case')
         return state

      case 'STORE_DATA':
         return {
            data: action.data,
            currentQuestion: action.currentQuestion,
            counter: counter + 1,
            prediction: []
         }

      case 'CLICKED_QST':
         return {
            ...state,
            prediction: [...state.prediction, action.prediction],
            currentQuestion: action.currentQuestion,
            counter: action.counter

         }
      default:
         return state;
   }
}

export default () => {
   const store = createStore(myData);
   return store;
}