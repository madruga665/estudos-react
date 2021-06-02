import { CLICK_UPDATE_VALUE } from './actionTypes';

export const clickButton = (newValue) => ({
  type: CLICK_UPDATE_VALUE,
  payload: {
    value: newValue
  }
});