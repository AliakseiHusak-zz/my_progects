import * as action from '../constants/actionTypes';

export const addFacts = fact => ({
  type: action.ADD_FACTS,
  fact,
});

export const addPeople = name => ({
  type: action.ADD_PEOPLE,
  name,
});

export const startVoting = vote => ({
  type: action.START_VOTING,
  vote,
});
