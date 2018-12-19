import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
};

let newOrder = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.PURCHASE_BURGER_START:
    return {
      ...state,
      loading: true
    };
  case actionTypes.PURCHASE_BURGER_SUCCESS:
    newOrder = {
      ...action.orderData,
      id: action.orderId
    };

    return {
      ...state,
      loading: false,
      orders: state.orders.concat(newOrder)
    };
  case actionTypes.PURCHASE_BURGER_FAIL:
    return {
      ...state,
      loading: false
    };
  default:
    return state;
  }
};

export default reducer;
