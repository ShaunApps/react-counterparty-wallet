import {
    REQUEST_BTC_PRICE,
    RECEIVE_BTC_PRICE, 
    FETCH_BTC_USD, 
    FETCH_XCP_USD,
    REQUEST_PRICE,
    RECEIVE_PRICE 
} from '../actions/index';

const INITIAL_STATE = { counterparty: {}, bitcoin: {} };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case REQUEST_PRICE:
        return {...state, [action.currency]: {isFetching: true } };
    case RECEIVE_PRICE:
        return {...state, [action.currency]: {isFetching: false, price: action.price } };
    default:
      return state;
    }
  }