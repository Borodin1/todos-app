export const getTodos = (state) => {
  return state.todos.todos;
};

export const getIsFetched = (state) => {
  return state.todos.isFetching;
};
