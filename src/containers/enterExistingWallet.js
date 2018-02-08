import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';


class EnterExisting extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        
      }

    render(){
    
        return(
            <div>
                <h1>Log Into Your Wallet</h1>
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
  