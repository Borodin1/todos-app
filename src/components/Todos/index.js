//hooks
import { useGetTodos } from "../../hooks/useGetTodos";

import { fetchify } from "../../helpers/fetchify";
//styles
import styles from "./Todos.module.css";

export const Todos = () => {
  const { data, isFetched } = useGetTodos();
  console.log(data.posts);
  const todosJSX = data?.posts?.map((todo) => {
    return <p key={todo?.id}>{todo?.title}</p>;
  });
  return (
    <div className={styles["todos"]}>
      <div className={styles["todos-lists"]}>
        {fetchify(isFetched, todosJSX)}
      </div>
    </div>
  );
};
