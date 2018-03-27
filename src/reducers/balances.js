import { 
    REQUEST_BALANCE,
    RECEIVE_BALANCE
} from '../actions/index';


const INITIAL_STATE = {  };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case REQUEST_BALANCE:
        return {...state, isFetchingFee: true };
    case RECEIVE_BALANCE:
        const { balance } = action;
        // for (var i in balance) {
        //     console.log(balance[i].asset);
        // }
        return {...state, isFetchingFee: false, assets: balance };
    default:
      return state;
    }
  }