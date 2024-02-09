import { useState } from "react";
import { Product } from "../interfaces/products.interface";

interface ProductInCart extends Product {
    count: number;
  }

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});


    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
      console.log({ count });
  
      setShoppingCart(oldShoppingCard => {
        
        const productInCart:ProductInCart = oldShoppingCard[product.id] ||{...product,count};
  
        if(Math.max(productInCart.count+count,0)> 0){
          productInCart.count  +=count;
          return {
              ...oldShoppingCard,
              [product.id]: productInCart
            }
        }
        const { [product.id]: toDelete, ...restoInfo } = oldShoppingCard;
        return restoInfo;
        // if (count === 0) {
        //   const { [product.id]: toDelete, ...restoInfo } = oldShoppingCard;
        //   return restoInfo;
        //   // const data = { ...oldShoppingCard };
        //   // delete data[product.id];
        //   // return data;
        // }
        // return {
        //   ...oldShoppingCard,
        //   [product.id]: { ...product, count }
        // }
      });
    };


    return{
        shoppingCart,
        onProductCountChange
    }
}
