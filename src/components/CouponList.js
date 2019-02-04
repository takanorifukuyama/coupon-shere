import React, { Component, Fragment } from 'react';

// const data = [
//     { shopName: "skycafe", coupon: "ーがもらえる！"},
//     { shopName: "bluecafe", coupon: "～がもらえる！！！"},
// ]

class CouponList extends Component {
    render() {
        
        return (
            <Fragment>
                <table>
                    <thead>
                        <th>Shop name</th>
                        <th>Coupon</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </Fragment>
        );
    }

}

export default CouponList;