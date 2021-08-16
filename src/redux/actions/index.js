import CLICK_UPDATE_VALUE from './actionTypes';

const clickButton = (newValue) => ({
  type: CLICK_UPDATE_VALUE,
  payload: {
    value: newValue,
  },
});

export default clickButton;
