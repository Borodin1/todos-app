import { todosTypes } from "../types/todos";

export const initialState = {
  todos: [],
  isFetching: false,
};

export const todosReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case todosTypes.START_FETCHING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case todosTypes.STOP_FETCHING: {
      return {
        ...state,
        isFetching: false,
      };
    }

    // eslint-disable-next-line no-duplicate-case
    case todosTypes.FETCH_TODOS: {
      return {
        ...state,
        isFetching: false,
        todos: action?.payload,
      };
    }

    case todosTypes.ADD_TODO: {
      return {
        ...state,
        isFetching: false,
        todos: [...state.todos, action?.payload],
      };
    }

    case todosTypes.DELETE_TODO: {
      return {
        ...state,
        isFetching: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
};
