import { saveState } from '../localStorage';

export const NEW_WALLET = 'NEW_WALLET';
export const EXISTING_WALLET = 'EXISTING_WALLET';
export const LOCAL_STORAGE_CHECK = 'LOCAL_STORAGE_CHECK';

// action for brand new PP and Address (no PP in localStorage)
export const newPassPhraseAndAddress = (state) => {
    // save to localStorage here?
    console.log("action state: " + state);
    // saveState(state);
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