import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { localStorageCheck } from './actions/index';
import './App.css';

import Welcome from './containers/walletWelcome/index';
import Existing from './containers/existing/index';

class App extends Component {
 
  componentWillMount() {
    this.props.localStorageCheck();
  }

  render() {
    return (
      <div className="App">
        {this.props.encrypted_pp ? (
          <Existing />) : (<Welcome />)}
      </div>
    );
  }
}



function mapStateToProps(state) {
  return { encrypted_pp: state.seed.localEncryptedPP };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ localStorageCheck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
