//hooks
import { useGetTodos } from "../../hooks/useGetTodos";

//styles
import styles from "./Todos.module.css";

//components
import { AddTodo } from "../AddTodo";
import { Trash } from "../../assets/svg/Trash";
//Core
import { fetchify } from "../../helpers/fetchify";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { Rotate } from "../../assets/svg/Rotate";

export const Todos = () => {
  const { data, isFetched } = useGetTodos();
  const { handleDeleteTodo } = useDeleteTodo();

  const todosJSX = data?.map((todo) => {
    return (
      <ul key={todo?.id}>
        <li>
          {todo?.title}
          <div>
            <span onClick={() => handleDeleteTodo(todo?.id)}>
              <Trash />
            </span>
            <span>
              <Rotate />
            </span>
          </div>
        </li>
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
