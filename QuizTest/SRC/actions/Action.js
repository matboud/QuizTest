export const Test = () => {
   console.log('inside action')
   return {
      type: 'TEST',
   }
};

export const getData = (data) => {
   const currentQuestion = data[0]
   console.log('get data action');
   return {
      type: 'STORE_DATA',
      data,
      currentQuestion
   }
};

export const clickedQuestion = (question, choosen_answer, right_answer, data, counter) => {

   const prediction = {
      question: question,
      choosen_answer: choosen_answer,
      right_answer: right_answer
   }
   const currentQuestion = data[counter]

   return {
      type: 'CLICKED_QST',
      prediction,
      currentQuestion,
      counter: counter + 1
   }
}

