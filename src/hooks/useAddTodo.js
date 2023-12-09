//Сore
import { useDispatch } from "react-redux";
import { todosActions } from "lib/redux/actions/todos";

export const useAddTodo = () => {
  const dispatch = useDispatch();

  const addTodo = async (todo) => {
    dispatch(todosActions.addTodoAsync(todo));
  };
  return addTodo;
};
