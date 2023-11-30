//hooks
import { useGetTodos } from "../../hooks/useGetTodos";

//styles
import styles from "./Todos.module.css";

//components
import { AddTodo } from "../AddTodo";

//Core
import { fetchify } from "../../helpers/fetchify";

export const Todos = () => {
  const { data, isFetched } = useGetTodos();

  const todosJSX = data?.map((todo) => {
    return (
      <ul key={todo?.id}>
        <li>{todo?.title}</li>
      </ul>
    );
  });
  return (
    <div className={styles["todos"]}>
      <AddTodo />
      <div className={styles["todos-lists"]}>
        {fetchify(isFetched, todosJSX)}
      </div>
    </div>
  );
};
