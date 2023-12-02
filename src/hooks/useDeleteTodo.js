import { useMutation, useQueryClient } from "react-query";
import { api } from "../api";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id) => {
      return api.todos.deleteTodo(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const handleDeleteTodo = async (id) => {
    await mutation.mutateAsync(id);
  };

  return { handleDeleteTodo };
};
