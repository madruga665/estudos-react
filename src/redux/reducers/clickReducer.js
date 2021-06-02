const initialState = {
  value: "",
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK_UPDATE_VALUE":
      return {
        ...state,
        value: action.payload.newValue,
      };
    default:
      return state;
  }
};
