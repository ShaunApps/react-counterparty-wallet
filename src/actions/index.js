import { saveState } from '../localStorage';
import axios from 'axios';

export const NEW_WALLET = 'NEW_WALLET';
export const EXISTING_WALLET = 'EXISTING_WALLET';
export const LOCAL_STORAGE_CHECK = 'LOCAL_STORAGE_CHECK';


// action for brand new PP and Address (no PP in localStorage)
export const newPassPhraseAndAddress = (state) => {
    let pp = state.pp;
    let address = state.address;
    let pw = state.pw;
    saveState({pp: pp, address: address});

    return {
        type: NEW_WALLET,
        payload: {
            pp: pp,
            address: address,
            pw: pw
        }
    }
}

// action for existing PP and Address (PP is in localStorage)
export const existingPPandAddress = (state) => {
    let pp = state.pp;
    let address = state.address;

    return {
        type: EXISTING_WALLET,
        payload: {
            pp: pp,
            address: address
        }
    }
}

export const localStorageCheck = () => {
    let check = localStorage.encrypted_pp ? true : false; // refactor this
    return {
        type: LOCAL_STORAGE_CHECK,
        payload: {
            encrypted_pp: check
        }

    }
}


// USD Price actions

export const REQUEST_PRICE = 'REQUEST_PRICE'
function requestPrice(ticker) {
  return {
    type: REQUEST_PRICE,
    currency: ticker
  }
}


export const RECEIVE_PRICE = 'RECEIVE_PRICE'
function receivePrice(ticker, json) {
  return {
    type: RECEIVE_PRICE,
    price: json[0].price_usd,
    currency: ticker,
    receivedAt: Date.now()
  }
}


export const getUSDPrice = (ticker) => {
    return function (dispatch) {
        dispatch(requestPrice(ticker))
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${ticker}/`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receivePrice(ticker, json))
            )
    }
}


// Fee calculator actions, using third-party API: https://bitcoinfees.earn.com/api/v1/fees/recommended
export const REQUEST_FEE = 'REQUEST_FEE'
function requestFee() {
    return {
        type: REQUEST_FEE
    }
}


export const RECEIVE_FEE = 'RECEIVE_FEE'
function receiveFee(json) {
    console.log(json);
    return {
        type: RECEIVE_FEE,
        feeInSat: json.halfHourFee
    }
}

export const fetchBitcoinFee = () => {
    return function (dispatch) {
        dispatch(requestFee())
        return fetch('https://bitcoinfees.earn.com/api/v1/fees/recommended')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receiveFee(json))
            )
    }
}