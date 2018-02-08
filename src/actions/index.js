import { saveState } from '../localStorage';

export const NEW_WALLET = 'NEW_WALLET';


export const newPassPhraseAndAddress = (state) => {
    // save to localStorage here?
    console.log("action state: " + state);
    saveState(state);
    let pp = state.pp;
    let address = state.address;

    return {
        type: NEW_WALLET,
        payload: {
            pp: pp,
            address: address
        }
    }
}