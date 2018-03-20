import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { existingPPandAddress } from '../../actions/index';
import { getUSDPrice } from '../../actions/index';

import Send from '../sendFunctions/index';

// this component reads from localStorage and passes data into redux state
class Existing extends Component {

  componentWillMount(){
    // this.props.getUSDPrice('counterparty');
    // this.props.getUSDPrice('bitcoin');
  }

  render() {
    let encryptedMnemonic = localStorage.getItem('encrypted_pp');
    let address = localStorage.getItem('address');
    let data = { pp: encryptedMnemonic, address: address };
    this.props.existingPPandAddress(data);
    return (
      <div>
        <h2>React XCP Wallet</h2>
        <h3>My Wallet</h3>
        <p>Address</p>
        <p>{this.props.address}</p>
        <hr />
        <Send />
        <hr />
        <h2>Market Prices</h2>
        <table>
          <tr><td><b>Rates USD</b></td></tr>
          <tr><td>BTC</td><td>${this.props.bitcoinPrice}</td></tr>
          <tr><td>XCP</td><td>${this.props.xcpPrice }</td></tr>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { address: state.seed.address, 
             bitcoinPrice: state.priceData.bitcoin.price,
             xcpPrice: state.priceData.counterparty.price };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ existingPPandAddress, getUSDPrice }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Existing);