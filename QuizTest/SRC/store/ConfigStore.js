import { createStore, applyMiddleware } from 'redux';

// since we ll handle simple data and we ll not combine stores, i choosed to add the reducer with config
const myData = (state = {}, action) => {
   switch (action.type) {
      case 'TEST':
         console.log('in the test case')
         return {}

      default:
         return state;
   }
}

export default () => {
   const store = createStore(myData);
   return store;
}