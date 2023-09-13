const transactionTypes = {
    1: {description: "Venda produtor", operation: 1},
    2: {description: "Venda afiliado", operation: 1},
    3: {description: "Comissão paga", operation: -1},
    4: {description: "Comissão recebida", operation: 1},
}

export default transactionTypes;