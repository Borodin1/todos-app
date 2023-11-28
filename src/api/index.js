import axios from "axios";

export const api = {
  todos: {
    async getTodos() {
      const data = await axios.get("https://dummyjson.com/posts");

      return data.data;
    },
  },
};
