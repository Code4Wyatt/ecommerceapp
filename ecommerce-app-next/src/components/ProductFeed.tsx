


interface ProductFeedProps {
    products: any[];
}

function ProductFeed({ products }: ProductFeedProps) {
    return (
        <div>
            {products.map((product) => {
                return <p>{product.title}</p>
            })}
        </div>
    )
}

export default ProductFeed