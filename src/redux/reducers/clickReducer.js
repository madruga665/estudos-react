const initialState = {
  value: '',
};

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        ...state,
        value: action.payload.value,
      };
    default:
      return state;
  }
};

export default clickReducer;
