import { useMutation } from "react-query";
import { api } from "../api";
import { useState } from "react";

export const useUpdateTodo = () => {
  const [editedTodo, setEditedTodo] = useState({ id: null, title: "" });

  const mutation = useMutation((id, newTodo) => {
    return api.todos.updatedTodo(id, newTodo);
  });

  const handleUpdateTodo = async () => {
    await mutation.mutateAsync(editedTodo.id, { title: editedTodo.title });
    setEditedTodo({ id: null, title: "" });
  };
};
