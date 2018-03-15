import { EXISTING_WALLET } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXISTING_WALLET:
    let pp = action.payload.pp;
    let address = action.payload.address;
    console.log("reducer state: " + pp);
    return { ...state, pp: pp, address: address };
  default:
    return state;
  }
}