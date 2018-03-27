import { combineReducers } from 'redux';
import NewWalletReducer from './newWallet';
import PriceDataReducer from './priceData';
import FeeDataReducer from './feeData';
import BalanceDataReducer from './balances';

const rootReducer = combineReducers({
  seed: NewWalletReducer,
  priceData: PriceDataReducer,
  feeData: FeeDataReducer,
  balanceData: BalanceDataReducer
});

export default rootReducer;