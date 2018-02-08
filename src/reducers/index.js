import { combineReducers } from 'redux';
import NewWalletReducer from './newWallet';

const rootReducer = combineReducers({
  seed: NewWalletReducer
});

export default rootReducer;