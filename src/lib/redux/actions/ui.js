import { uiTypes } from "../types/ui";

export const uiActions = Object.freeze({
  resetError: () => {
    return {
      type: uiTypes.RESET_ERROR,
    };
  },

  setError: (message) => {
    return {
      type: uiTypes.SET_ERROR,
      error: true,
      payload: message,
    };
  },
});
