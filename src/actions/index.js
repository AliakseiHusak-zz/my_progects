export const setView = text => ({
  type: 'SET_VIEW',
  text,
});

export const addPerson = text => ({
  type: 'ADD_PERSON',
  text,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
