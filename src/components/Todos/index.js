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
import { useUpdateTodo } from "../../hooks/useUpdateTodo";
import { Input } from "../elements/input";

export const Todos = () => {
  const { data, isFetched } = useGetTodos();
  const { handleDeleteTodo } = useDeleteTodo();
  const { mutation, editedTodo, setEditedTodo } = useUpdateTodo();

  const handleUpdateTodo = async () => {
    await mutation.mutateAsync(editedTodo);
    setEditedTodo({ id: null, title: "" });
  };

  const todosJSX = data?.map((todo) => {
    return (
      <ul key={todo?.id}>
        <li>
          {editedTodo?.id === todo?.id ? (
            <>
              <Input
                type="text"
                value={editedTodo?.title || ""}
                handleChange={(e) => setEditedTodo({ ...editedTodo, title: e })}
              />
              <button onClick={handleUpdateTodo}>Update Todo</button>
            </>
          ) : (
            <>
              {todo?.title}
              <div>
                <span onClick={() => handleDeleteTodo(todo?.id)}>
                  <Trash />
                </span>
                <span
                  onClick={() =>
                    setEditedTodo({
                      id: todo?.id,
                      title: todo?.title,
                    })
                  }>
                  <Rotate />
                </span>
              </div>
            </>
          )}
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
