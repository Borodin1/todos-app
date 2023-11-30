import { useMutation } from "react-query";
import { api } from "../api";

export const useAddTodo = () => {
  const mutation = useMutation((todo) => {
    return api.todos.addTodo(todo);
  });
  return mutation;
};
