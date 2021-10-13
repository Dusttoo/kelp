import { csrfFetch } from './csrf';


const LOAD_QUESTION = 'questions/loadQuestions';
const ADD_QUESTION = 'questions/addQuestions';
const DELETE_QUESTION = 'questions/deleteQuestions';




const loadQuestions = (questions) => ({
  type: LOAD_QUESTION,
  questions,
});


const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

const deleteQuestion = (questionId) => ({
  type: DELETE_QUESTION,
  questionId,
});


export const getQuestions = () => async (dispatch) => {
  const response = await fetch('/api/questions');
  const questions = await response.json();
  dispatch(loadQuestions(questions));
  return response
};

export const newQuestion = (question) => async (dispatch) => {
  const response = await csrfFetch('/api/questions/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(question),
  });


  const newQuestion = await response.json();
  dispatch(addQuestion(newQuestion));
  return newQuestion
};

export const updateQuestion = (questionId, payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${questionId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });


  if(response.ok) {
  const question = await response.json();
  dispatch(addQuestion(question));
  return question;
  }
  
};

export const removeQuestion = (questionId) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${questionId}/delete`,{
  method: 'DELETE',
  statusCode: 204,
  headers: {'Content-Type': 'application/json'}
});

  if(response.ok) {
    const question = await response.json();
    dispatch(deleteQuestion(question.id));
  }
}




const initialState = {};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTION:
      const newState = { ...state };
      action.questions.forEach(question => {
        newState[question.id] = question;
      });
      return newState;
    case ADD_QUESTION:
      return { ...state };
    case DELETE_QUESTION:
      return { ...state };
    default:
      return state;
  }
};

export default questionReducer;