//elements
import { useState } from "react";
import { Input } from "../elements/input";

//hooks
import { useAddTodo } from "../../hooks/useAddTodo";

//styles
import styles from "./AddTodo.module.css";

export const AddTodo = () => {
  const addTodo = useAddTodo();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      title: inputText,
      id: Math.floor(Math.random() * 1000) + 1,
    };

    addTodo(todo);
    setInputText("");
  };
  return (
    <div className={styles["addTodo"]}>
      <div className={styles["addTodo-input"]}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Add a new task..."
            handleChange={(e) => setInputText(e)}
            value={inputText}
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div className={styles["addTodo-solidLine"]}></div>
    </div>
  );
};
