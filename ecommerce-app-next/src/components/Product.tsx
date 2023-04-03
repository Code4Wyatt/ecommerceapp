import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { ProductProps } from "@/typings";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({ id, title, description, price, category, image }: ProductProps) {
    const [rating, setRating] = useState(MIN_RATING);

    const [hasPrime, setHasPrime] = useState(false);

    const formattedPrice = new Intl.NumberFormat('in-UK', { style: 'currency', currency: 'GBP' }).format(price);

    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
        setHasPrime(Math.random() < 0.5);
    }, []);

    return <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Image src={image} alt={title} height={200} width={200} className="object-contain h-200" /></div>


        <h4 className="my-">{title}</h4>

        <div className="flex mt-auto">
            {Array(rating).fill(0).map((_, i) => (
                <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs  line-clamp-2">{description}</p>

        <div className="mb-5">
            <p>{formattedPrice}</p>
        </div>

        {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <img src="https://links.papareact.com/fdw" width={10} height={10} alt="prime" className="w-12" />
                <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
            </div>
        )}

        <button className="mt-auto button">Add to Basket</button>
    </div>

}

export default Product