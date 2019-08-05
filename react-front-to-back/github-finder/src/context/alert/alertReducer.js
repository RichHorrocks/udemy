import { SET_ALERT, REMOVE_ALERT } from '../types.js';

export default (state, action) => {
  switch (action.type) {
  case REMOVE_ALERT:
    return null;
  case SET_ALERT:
    return action.payload;
  default:
    return state;
  }
};
