const querys = {
    sales: {
        insert: {
            name: "sales-insert",
            text: "INSERT INTO sales VALUES ($1, $2, $3, $4, $5)",
        },
        insertMany: {
            name: "sales-insert-many",
            text: "INSERT INTO sales VALUES ",
        },
        getValueByProdAndSeller: {
            name: "sales-totalizer",
            text: "SELECT seller, product, transaction_type, SUM(value) AS amount FROM sales GROUP BY seller, product, transaction_type order by seller, product"
        }
    }
}

module.exports = querys