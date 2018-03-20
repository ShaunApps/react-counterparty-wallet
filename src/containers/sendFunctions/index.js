import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBitcoinFee } from '../../actions/index';

class SendContainer extends Component {
    componentWillMount(){
        // this.props.fetchBitcoinFee();
    }

    render(){
        return(
            <div>
                <h3>Send</h3>
                <div>
                    <p><span><b>Asset</b><br/>
                        Send this asset</span></p>
                    <input />
                </div>
                <div>
                    <p><span><b>Amount</b><br/>
                        Quantity to Send</span></p>
                    <input />
                </div>
                <div>
                    <p><span><b>Recipient Address</b><br/>
                        Send the asset to this address</span></p>
                    <input />
                </div>
                <div>
                    <p><span><b>BTC Fee</b><br/>
                        Bitcoin fee to miners</span></p>
                    <input />
                    <p>Fee in satoshis: {this.props.feeInSat }</p>
                </div>
                <div>
                    <p><span><b>Password</b><br/>
                        Enter password to send</span></p>
                    <input />
                </div>
                <button>Send Asset</button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { feeInSat: state.feeData.feeInSat };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBitcoinFee }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SendContainer);