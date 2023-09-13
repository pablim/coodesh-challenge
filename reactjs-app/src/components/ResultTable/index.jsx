import React from "react"

import transactionTypes from "../../utils/transactionTypes";

const ResultTable = ({items}) => {
    return (
        <div className="w-100">
            <table className="table table-hover table-striped table-dark">
                <thead className="table-light">
                    <tr>
                        <th>Seller</th>
                        <th>Product</th>
                        <th>Transaction</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr>
                                <td>{item.seller}</td>
                                <td>{item.product}</td>
                                <td>{transactionTypes[item.transaction_type].description}</td>
                                <td className={transactionTypes[item.transaction_type].operation === -1 ? "text-danger" : "text-success"}>{item.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable