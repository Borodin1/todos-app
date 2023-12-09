//Core
import { createStore } from "redux";
import { composeEnhancers, middleware } from "./middleware";
import { rootReducer } from "./rootReducer";
import { applyMiddleware } from "redux";

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
