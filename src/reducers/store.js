export default (state = [], action) => {
  const newState = state;
  let persons = newState.persons || [];
  let person;
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...newState,
        view: action.text,
      };
    case 'ADD_PERSON':
      const { text } = action;
      console.log('newState', newState);
      if (persons.some(element => element.name === text)) {
        return { ...newState };
      }
      person = {
        name: text,
        facts: [],
      };
      persons.push(person);
      return {
        ...newState,
        persons,
      };
    case 'ADD_FACT':
      persons = state.persons.map(element => {
        if (element.name === action.value.name) {
          element.facts.push(action.value.fact);
        }
        return element;
      });
      return {
        ...newState,
        persons,
      };
    default:
      return {};
  }
};
