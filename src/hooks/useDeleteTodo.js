import { useMutation } from "react-query";
import { api } from "../api";

export const useDeleteTodo = () => {
  const mutation = useMutation((id) => {
    return api.todos.deleteTodo(id);
  });

  const handleDeleteTodo = async (id) => {
    await mutation.mutateAsync(id);
  };

  return { handleDeleteTodo };
};
