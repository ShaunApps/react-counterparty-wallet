import React, { Component } from 'react';
import { newPassphrase } from '../crypto/passphrase';

import bip39 from 'bip39';

class CreateNew extends Component {
    render(){
        return(
            <div>
                <h1>Create New Wallet</h1>
                <b>Passphrase</b><br />
                <i>Leave default 12 words to create new wallet,<br />
                   or enter an existing passphrase to import wallet</i><br/>
                {/* <input type="text" value={newPassphrase()} id="newPassphrase" style={{width: 100}} onblur={previewAddr()}><br><br> */}
                <input type="text" value={bip39.generateMnemonic()} id="newPassphrase" style={{ width: 100 + "%" }} />
            </div>
        );
    }
}

export default CreateNew;