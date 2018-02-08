import React, { Component } from 'react';

const Address = (props) => {
    return (
        <div>
          <b>Your address</b>
          <p>{props.address}</p>
        </div>
    )
}
export default Address;