import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newPassphrase, newPassword } from '../../crypto/passphrase';
import bitcoin from 'bitcoinjs-lib';
import bip39, { validateMnemonic } from 'bip39';
import Crypto from 'crypto-js';

import { newPassPhraseAndAddress, localStorageCheck } from '../../actions/index';

import Address from '../../components/address';
import ShowNewWallet from '../../components/showNewWallet';

class CreateNew extends Component {
    constructor(props) {
        super(props);
        const newMnemonic = bip39.generateMnemonic();
        const newPassword8 = newPassword(8);
        const seed = bip39.mnemonicToSeed(newMnemonic);
        const root = bitcoin.HDNode.fromSeedBuffer(seed);
        const newAddress = root.derivePath("m/0'/0/0").getAddress();
        this.handleClick = this.handleClick.bind(this);
        this.state = { generateNewWallet: false,
                       mnemonic: newMnemonic,
                       password: newPassword8,
                       address: newAddress }
    }
    handleClick() {
        let valueOfMnemonic = document.getElementById('newPassphrase').value;
        let valueOfPassword = document.getElementById('newPassWord').value;
        let encryptedMnemonic = Crypto.AES.encrypt(valueOfMnemonic, valueOfPassword);
        let data = { pp: encryptedMnemonic, address: this.state.address, pw: valueOfPassword };
        this.props.newPassPhraseAndAddress(data);
        console.log(data);
        this.setState({ mnemonic: valueOfMnemonic, generateNewWallet: true })
      }

   
    render(){
       
        return(
            <div>
                <h1>Create New Wallet</h1>
                <b>Passphrase</b><br />
                <i>Leave default 12 words to create new wallet,<br />
                or enter an existing passphrase to import wallet</i><br/>
                <input type="text" defaultValue={this.state.mnemonic} id="newPassphrase" style={{ width: 100 + "%" }} />
                <br/>
                {/* <Address address={this.state.address} /> */}
                <b>Password</b><br />
                <i>Must be entered every time you send,<br/>
                    8-10 random characters recommended</i><br/>
                <input type="text" id="newPassWord" defaultValue={this.state.password} /><br />
                <button
                    onClick={this.handleClick} 
                    style={{ backgroundColor: '#4dd0e1' }}
                    >
                    Generate New Wallet
                    </button>
                {this.state.generateNewWallet ? (
                    <ShowNewWallet button={this.props.dispatchLocalCheck} />) : (<div></div>)
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newPassPhraseAndAddress, dispatchLocalCheck : () => {
        dispatch(localStorageCheck())
    } }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateNew);
  