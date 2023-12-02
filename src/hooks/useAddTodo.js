import { useMutation, useQueryClient } from "react-query";
import { api } from "../api";

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (todo) => {
      return api.todos.addTodo(todo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  return mutation;
};
