import { useQuery } from "react-query";
import { api } from "../api";

export const useGetTodos = () => {
  const { data, isFetched } = useQuery("todos", api.todos.getTodos);

  return {
    data: data || [],
    isFetched,
  };
};
