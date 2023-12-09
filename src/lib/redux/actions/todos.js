import { api } from "api";
import { todosTypes } from "../types/todos";
import { uiActions } from "./ui";

export const todosActions = Object.freeze({
  startFetching: () => {
    return {
      type: todosTypes.START_FETCHING,
    };
  },

  stopFetching: () => {
    return {
      type: todosTypes.STOP_FETCHING,
    };
  },
  fetchTodos: (todos) => {
    return {
      type: todosTypes.FETCH_TODOS,
      payload: todos,
    };
  },
  addTodo: (todo) => {
    return {
      type: todosTypes.ADD_TODO,
      payload: todo,
    };
  },

  deleteTodo: (id) => {
    return {
      type: todosTypes.DELETE_TODO,
      payload: id,
    };
  },

  fetchTodosAsync: () => async (dispatch) => {
    try {
      dispatch(todosActions.startFetching());

      const todos = await api.todos.getTodos();

      dispatch(
        todosActions.fetchTodos(
          Object.entries(todos).map(([id, todo]) => ({
            id,
            title: todo.title,
          }))
        )
      );
    } catch (error) {
      const { message } = error;
      dispatch(uiActions.setError(message));
    } finally {
      dispatch(todosActions.stopFetching());
    }
  },

  addTodoAsync: (todo) => async (dispatch) => {
    try {
      dispatch(todosActions.startFetching());

      const data = await api.todos.addTodo(todo);

      dispatch(todosActions.addTodo(data));
    } catch (error) {
      const { message } = error;
      dispatch(uiActions.setError(message));
    } finally {
      dispatch(todosActions.stopFetching());
    }
  },

  deleteTodoAsync: (id) => async (dispatch) => {
    try {
      dispatch(todosActions.startFetching());

      const data = api.todos.deleteTodo(id);

      dispatch(todosActions.deleteTodo(data));
    } catch (error) {
      const { message } = error;
      dispatch(uiActions.setError(message));
    } finally {
      dispatch(todosActions.stopFetching());
    }
  },
});
