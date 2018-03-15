import React from 'react';

const ShowNewWallet = (props) => {
    return(
        <div style={{ marginTop: 25 }}>
            <p>SUCCESS!</p><br/>
            <p>Wallet is ready to use.</p>
            <p>It is permanently stored in the browser's memory,<br/>
               but you must <span style={{color: 'red'}}>write down the 12 word passphrase</span> to recover the wallet.</p>
            <button
                onClick={props.button} 
                style={{ backgroundColor: '#4dd0e1' }}
                >
                Open New Wallet
                </button>
        </div>
    )
}
export default ShowNewWallet;