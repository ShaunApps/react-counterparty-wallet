import { 
    REQUEST_FEE,
    RECEIVE_FEE
} from '../actions/index';


const INITIAL_STATE = { feeInSat: 40 };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case REQUEST_FEE:
        return {...state, isFetchingFee: true };
    case RECEIVE_FEE:
        return {...state, isFetchingFee: false, feeInSat: action.feeInSat };
    default:
      return state;
    }
  }