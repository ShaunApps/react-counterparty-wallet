import { NEW_WALLET, LOCAL_STORAGE_CHECK, EXISTING_WALLET } from '../actions/index';

const INITIAL_STATE = { localEncryptedPP: false };

export default function(state = INITIAL_STATE, action) {
  let pp;
  let address;
  let pw;
  switch (action.type) {
  case NEW_WALLET:
    pp = action.payload.pp;
    address = action.payload.address;
    pw = action.payload.pw;
    console.log("reducer state: " + {pp, pw, address });
    return { ...state, pp: pp, address: address, pw: pw };
  case EXISTING_WALLET:
    pp = action.payload.pp;
    address = action.payload.address;
    console.log("reducer state: " + pp);
    return { ...state, pp: pp, address: address };
  case LOCAL_STORAGE_CHECK:
    return { ...state, localEncryptedPP: action.payload.encrypted_pp }
  default:
    return state;
  }
}