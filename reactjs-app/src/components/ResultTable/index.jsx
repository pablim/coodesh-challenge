import React from "react"

const ResultTable = ({items}) => {
    return (
        <div className="w-100">
            <table className="table table-hover table-striped table-dark">
                <thead className="table-light">
                    <tr>
                        <th>Seller</th>
                        <th>Product</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr>
                                <td>{item.seller}</td>
                                <td>{item.product}</td>
                                <td>{item.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable