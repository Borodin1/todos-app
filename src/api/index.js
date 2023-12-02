import axios from "axios";

export const api = {
  todos: {
    async getTodos() {
      const data = await axios.get(
        "https://todo-app-390314-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
      );

      return data.data;
    },
    async addTodo(todo) {
      const response = await axios.post(
        "https://todo-app-390314-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
        todo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    },
    async deleteTodo(id) {
      const { data } = await axios.delete(
        `https://todo-app-390314-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
      );
      return data;
    },
    async updatedTodo(newTodo) {
      console.log(newTodo);
      const { data } = await axios.put(
        `https://todo-app-390314-default-rtdb.europe-west1.firebasedatabase.app/todos/${newTodo?.id}.json`,
        {
          title: newTodo?.title,
        }
      );

      return data;
    },
  },
};
