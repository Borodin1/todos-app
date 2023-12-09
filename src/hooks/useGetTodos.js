import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "lib/redux/actions/todos";
import { getIsFetched, getTodos } from "lib/redux/selectors/todos";

export const useGetTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isFetched = useSelector(getIsFetched);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(todosActions.fetchTodosAsync());
    }
  }, [dispatch, todos]);

  return {
    data: todos || [],
    isFetched,
  };
};
