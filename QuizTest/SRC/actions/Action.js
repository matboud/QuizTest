export const getData = (data) => {
   const currentQuestion = data[0]
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

export const totalResult = (predictions) => {
   let totalRight = 0
   predictions.map((answer) => {
      if (answer.choosen_answer === answer.right_answer) {
         totalRight += 1;
      }
   })

   return {
       type: 'TOTAL_RESULT',
       percentageTotal: totalRight/predictions.length * 100,
       totalRight: totalRight
   }
}
