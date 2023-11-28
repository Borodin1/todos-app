import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//react-query
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
