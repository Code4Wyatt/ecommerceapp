import Product from "./Product";
import { ProductFeedProps } from "@/typings";

function ProductFeed({ products }: ProductFeedProps) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

            {products.slice(0, 4).map(({ id, title, description, price, category, image }) => {
                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}
                    >
                        {title}
                    </Product>
                );
            })}

            <img className="md:col-span-4" src="https://links.papareact.com/dyz" alt="" />

            <div className="md:col-span-2">
                {products.slice(4, 5).map(({ id, title, description, price, category, image }) => {
                    return (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            category={category}
                            image={image}
                        >
                            {title}
                        </Product>
                    );
                })}
            </div>


            {products.slice(5, products.length).map(({ id, title, description, price, category, image }) => {
                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        category={category}
                        image={image}
                    >
                        {title}
                    </Product>
                );
            })}



        </div>
    );
}

export default ProductFeed;
