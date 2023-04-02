export type BasketItem = {
  id: number;
  title: string;
  price: number;
}

export type BasketState = {
  items: BasketItem[];
}

export type ProductProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    key?: any;
    children?: any;
}

export type ProductFeedProps = {
    products: {
        id: number;
        title: string;
        description: string;
        price: number;
        category: string;
        image: string;
    }[];
}