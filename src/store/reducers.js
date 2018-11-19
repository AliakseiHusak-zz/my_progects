import * as actionType from '../constants/actionTypes';

const todos = (state = {}, action) => {
  switch (action.type) {
    case actionType.ADD_FACTS:
      return {
        action: actionType.ADD_FACTS,
        value: action.value,
      };
    case actionType.ADD_PEOPLE:
      return {
        action: actionType.ADD_PEOPLE,
        value: action.value,
      };
    case actionType.START_VOTING:
      return {
        action: actionType.START_VOTING,
        value: action.value,
      };
    default:
      return state;
  }
};

export default todos;
