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
            text: "SELECT seller, product, SUM(value) AS amount FROM sales GROUP BY seller, product"
        }
    }
}

module.exports = querys