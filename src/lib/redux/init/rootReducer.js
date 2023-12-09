import { combineReducers } from "redux";

//reducers
import { todosReducer as todos } from "../reducers/todos";
import { uiReducer as ui } from "../reducers/ui";

export const rootReducer = combineReducers({
  todos,
  ui,
});
