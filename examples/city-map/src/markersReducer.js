export default (state, action) => {
  if (typeof state === 'undefined') {
    return {
      list: []
    };
  }

  if (action.type === 'ADD_MARKER') {
    return {
      ...state,
      list: [...state.list, action.point]
    };
  }

  return state;
};
