import { createStore, applyMiddleware } from 'redux';

const data = [];
const currentQuestion = {};
const counter = 0;
const prediction = [];
const percentage = 0;
const totalRight = 0;

// since we ll handle simple data and we ll not combine stores, i choosed to add the reducer with config
const myData = (state = { prediction, data, currentQuestion, counter, percentage, totalRight }, action) => {
   switch (action.type) {
      case 'TOTAL_RESULT':
         console.log('TOTAL_RESULT')
         return {
            ...state,
            percentage: action.percentageTotal,
            totalRight: action.totalRight
         }

      case 'STORE_DATA':
         return {
            data: action.data,
            currentQuestion: action.currentQuestion,
            counter: counter + 1,
            prediction: [],
            percentage: 0,
            totalRight: 0,

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