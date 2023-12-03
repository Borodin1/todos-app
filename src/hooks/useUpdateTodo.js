import { useMutation, useQueryClient } from "react-query";
import { api } from "../api";
import { useState } from "react";

export const useUpdateTodo = () => {
  const [editedTodo, setEditedTodo] = useState({ id: null, title: "" });
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newTodo) => {
      return api.todos.updatedTodo(newTodo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return {
    mutation,
    editedTodo,
    setEditedTodo,
  };
};
