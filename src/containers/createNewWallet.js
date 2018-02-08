import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newPassphrase, newPassword } from '../crypto/passphrase';
import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';
import Crypto from 'crypto-js';

import { newPassPhraseAndAddress } from '../actions/index';

import Address from '.././components/address';
import ShowNewWallet from '../components/showNewWallet';

class CreateNew extends Component {
    constructor(props) {
        super(props);
        this.mnemonic = "";
        this.address = "";
        this.handleClick = this.handleClick.bind(this);
        this.state = { generateNewWallet: false }
    }
    handleClick() {
        let data = { pp: this.mnemonic, address: this.address }
        this.props.newPassPhraseAndAddress(data);
        console.log(data);
        this.setState({ generateNewWallet: true })
      }

    render(){
        const mnemonic = bip39.generateMnemonic();
        const seed = bip39.mnemonicToSeed(mnemonic);
        const root = bitcoin.HDNode.fromSeedBuffer(seed);
        const address = root.derivePath("m/0'/0/0").getAddress();
        const password = newPassword(8);
        this.mnemonic = mnemonic;
        this.address = address;
       
        return(
            <div>
                <h1>Create New Wallet</h1>
                <b>Passphrase</b><br />
                <i>Leave default 12 words to create new wallet,<br />
                or enter an existing passphrase to import wallet</i><br/>
                <input type="text" value={mnemonic} id="newPassphrase" style={{ width: 100 + "%" }} />
                <br/>
                <Address address={address} />
                <b>Password</b><br />
                <i>Must be entered every time you send,<br/>
                    8-10 random characters recommended</i><br/>
                <input type="text" value={password} /><br />
                <button
                    onClick={this.handleClick} 
                    style={{ backgroundColor: '#4dd0e1' }}
                    >
                    Generate New Wallet
                    </button>
                {this.state.generateNewWallet ? (
                    <ShowNewWallet />) : (<div></div>)
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newPassPhraseAndAddress }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateNew);
  