const ProductList = () => {
    return (
        <div className="products__page">
            <div className="products__selection">
                <div className="nav">
                    BROWSE
                </div>
                <ul>
                    <li> Electronics </li>
                    <li> Jewelry </li>
                    <li> Men Clothing </li>
                    <li> Women Clothing </li>
                </ul>
            </div>
            <div className="products__listing">
                Product List
            </div>
        </div>
    )
}

export default ProductList;