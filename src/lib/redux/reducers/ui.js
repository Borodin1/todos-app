import { uiTypes } from "../types/ui";

export const initialState = {
  errorMessage: "",
  error: false,
};

export const uiReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case uiTypes.SET_ERROR: {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    }

    // eslint-disable-next-line no-duplicate-case
    case uiTypes.SET_ERROR: {
      return {
        ...state,
        error: false,
        errorMessage: "",
      };
    }
    default: {
      return state;
    }
  }
};
