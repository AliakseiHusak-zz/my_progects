export default (state = [], action) => {
  const newState = state;
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...newState,
        view: action.text,
      };
    case 'ADD_PERSON':
      const persons = newState.persons || [];
      persons.push(action.text);
      return {
        ...newState,
        persons,
      };
    default:
      return {};
  }
};
