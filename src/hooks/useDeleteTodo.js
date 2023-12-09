import { useDispatch } from "react-redux";
import { todosActions } from "lib/redux/actions/todos";
import { useEffect } from "react";

export const useDeleteTodo = () => {
  const dispatch = useDispatch();
  const handleDeleteTodo = async (id) => {
    dispatch(todosActions.deleteTodoAsync(id));
  };

  return { handleDeleteTodo };
};
