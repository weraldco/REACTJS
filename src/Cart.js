function Cart() {
    const products = []
    return <>
        <h1>Cart</h1>
        {products.length >= 0 && <h2>You have {products.length} products in your cart</h2>}
        <h3>Products</h3>
        <ul>
            {products.map((product,i) => (
                <li key={i}>{product}</li>
            ))}
        </ul>
    </>
}

export default Cart