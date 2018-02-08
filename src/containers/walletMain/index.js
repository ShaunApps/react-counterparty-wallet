import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

import Address from '../../components/address';

class WalletMain extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    
        return(
            <div>
                <h1>React XCP Wallet</h1>
                <h2>My Wallet</h2>
                <Address address={} />
                <input 
                    type="text" 
                    id="" 
                    style={{ width: 100 + "%" }} 
                    placeholder="Enter your 12 word passphrase."
                    />
                
            </div>
        );
    }
}


export default EnterExisting;
  