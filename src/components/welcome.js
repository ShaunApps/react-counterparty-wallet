import React, { Component } from 'react';

import CreateNew from '.././containers/createNewWallet';

class Welcome extends Component {
    render(){
        return (
            <div>
                <h1>React XCP Wallet</h1>
                <h2>My Wallet</h2>
                <CreateNew />
            </div>

        )
    }
}

export default Welcome;