import { useState } from "react";
import { Product } from "../interfaces/products.interface";

interface ProductInCart extends Product {
    count: number;
  }

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});


    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
  
      setShoppingCart(oldShoppingCard => {
        
        if (count === 0) {
          const { [product.id]: toDelete, ...restoInfo } = oldShoppingCard;
          return restoInfo;
          // const data = { ...oldShoppingCard };
          // delete data[product.id];
          // return data;
        }
        return {
          ...oldShoppingCard,
          [product.id]: { ...product, count }
        }
      });
    };


    return{
        shoppingCart,
        onProductCountChange
    }
}
