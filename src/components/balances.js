import React from 'react';

const BalanceRow = (props) => {
    return(
        <tr>
            <td>{props.asset}</td>
            <td>{props.amount}</td>
        </tr>
    )
}

const Balance = (props) => {
    const { balance } = props;
    const balanceArray = [];
    for (var i in balance){
        balanceArray.push({asset: i, amount: balance[i]});
    }
    return(
        <table>
            <tbody>
        {balanceArray.map((i) =>
            <BalanceRow asset={i.asset}
                        amount={i.amount} />
        )}
            </tbody>
        </table>
        )    
            
                  
}
export default Balance;