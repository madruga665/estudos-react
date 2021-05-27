import { CLICK_UPDATE_VALUE } from './actionTypes';

export const clickButton = (value, event) => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});