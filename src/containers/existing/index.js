import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { existingPPandAddress } from '../../actions/index';

// this component reads from localStorage and passes data into redux state
class Existing extends Component {
  render() {
    let encryptedMnemonic = localStorage.getItem('encrypted_pp');
    let address = localStorage.getItem('address');
    let data = { pp: encryptedMnemonic, address: address };
    this.props.existingPPandAddress(data);
    return (
      <div>
        <h3>Previous Existing wallet</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ existingPPandAddress }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Existing);