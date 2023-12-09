import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//react-query
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";
import { Provider } from "react-redux";
import { store } from "lib/redux/init/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
