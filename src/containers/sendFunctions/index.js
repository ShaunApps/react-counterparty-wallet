import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBitcoinFee, checkSendInputData } from '../../actions/index';
import { FormErrors } from '../.././components/formErrors';

class SendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetName: '', 
            amount: '', 
            address: '', 
            btcFee: '', 
            password: '',
            formErrors: {assetName: '', amount: '', address: '', btcFee: '', password: ''},
            assetNameValid: false,
            amountValid: false,
            addressValid: false,
            btcFeeValid: false,
            passwordValid: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.extractLocalState = this.extractLocalState.bind(this);
      }


    componentWillMount(){
        this.props.fetchBitcoinFee();
    }

    extractLocalState(){
        const { assetName, amount, address, btcFee, password } = this.state;
        return { assetName, amount, address, btcFee, password }
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        const { assetNameValid, amountValid, addressValid, btcFeeValid, passwordValid } = this.state;
    
        switch(fieldName) {
          case 'assetName':
            fieldValidationErrors.assetName = assetNameValid ? '' : ' is invalid';
            break;
          case 'amount':
            fieldValidationErrors.amount = amountValid ? '': ' is too short';
            break;
          case 'address':            
            fieldValidationErrors.address = addressValid ? '': ' is too short';
            break;
          case 'btcFee':
            fieldValidationErrors.btcFee = btcFeeValid ? '': ' is too short';
            break;
          case 'password':
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        assetNameValid: assetNameValid,
                        amountValid: amountValid,
                        addressValid: addressValid,
                        btcFeeValid: btcFeeValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

      handleSubmit(event) {
        checkSendInputData(this.extractLocalState());
        event.preventDefault();
      }

    render(){
        return(
            <div>
                <h3>Send</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <b>Asset</b><br/>
                        Send this asset<br/>
                        <input
                            name="assetName"
                            value={this.state.assetName}
                            type="text"
                            onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <br/>

                    <label>
                        <b>Amount</b><br/>
                        Quantity to Send<br/>
                        <input
                            name="amount"
                            type="text"
                            value={this.state.amount}
                            onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <br/>

                    <label>
                        <b>Recipient Address</b><br/>
                        Send the asset to this address<br/>
                        <input
                            name="address"
                            value={this.state.address}
                            type="text"
                            onChange={this.handleInputChange} 
                            placeholder='Bitcoin Address' />
                    </label>
                    <br/>
                    <br/>

                    <label>
                        <b>BTC Fee</b><br/>
                        Bitcoin fee to miners<br/>
                        <input
                            name="btcFee"
                            value={this.state.btcFee}
                            type="text"
                            onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <br/>

                    <label>
                        <b>Password</b><br/>
                        Enter password to send<br/>
                        <input
                            name="password"
                            value={this.state.password}
                            type="text"
                            onChange={this.handleInputChange} />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Send" />
                    <br/>
                    <div className="">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </form>
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