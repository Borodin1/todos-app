import { useQuery } from "react-query";
import { api } from "../api";
import { useEffect, useState } from "react";

export const useGetTodos = () => {
  const [todos, setTodos] = useState([]);

  const { data, isFetched } = useQuery("todos", api.todos.getTodos);

  useEffect(() => {
    const loadedTodos = [];
    if (data) {
      for (const key in data) {
        loadedTodos.push({
          id: key,
          title: data[key].title,
        });
      }
      setTodos(loadedTodos);
    }
  }, [data]);

  return {
    data: todos || [],
    isFetched,
  };
};
