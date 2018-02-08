import React, { Component } from 'react';
import { connect } from 'react-redux';
import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';
import Crypto from 'crypto-js';

import { newPassPhraseAndAddress } from '../actions/index';

import Address from '.././components/address';

const ShowNewWallet = (props) => {
    return(
        <div style={{ marginTop: 25 }}>
            <p>SUCCESS!</p><br/>
            <p>Wallet is ready to use.</p>
            <p>It is permanently stored in the browser's memory,<br/>
               but you must <span style={{color: 'red'}}>write down the 12 word passphrase</span> to recover the wallet.</p>
        </div>
    )
}
export default ShowNewWallet;