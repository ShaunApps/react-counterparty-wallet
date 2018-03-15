import React, { Component } from 'react';

import CreateNew from '../createNewWallet/index';
import Existing from '../enterExistingWallet';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.handleNewWalletClick = this.handleNewWalletClick.bind(this);
        this.state = {createNewWallet: false};
      }
    
    handleNewWalletClick(){
        this.setState({createNewWallet: true});
    }
    render(){
        const createNewWallet = this.state.createNewWallet;
        return (
            <div>
                <h1>React XCP Wallet</h1>
                <Existing />
                <button style={{backgroundColor: 'green'}}>Login</button>
                <button
                    style={{ backgroundColor: 'red' }}
                    onClick={this.handleNewWalletClick}
                    >
                Create New Wallet
                </button>
                {createNewWallet ? (
                    <CreateNew />) : (<div></div>)
                }
                
            </div>

        )
    }
}

export default Welcome;