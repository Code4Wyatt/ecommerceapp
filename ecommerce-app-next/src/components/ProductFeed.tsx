
import Product from './Product';
import { ProductFeedProps } from '@/typings';

function ProductFeed({ products }: ProductFeedProps) {
    return (
        <div>
            {products.map(({ id, title, description, price, category, image }) => {
                return <Product key={id} id={id} title={title} description={description} price={price} category={category} image={image}>{title}</Product>
            })}
        </div>
    )
}

export default ProductFeed