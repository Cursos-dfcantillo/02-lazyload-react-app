import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import {  createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/products.interface";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product,className,style,onChange,value }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({
    product,onChange,value
  });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div style={style} className={`${styles.productCard} ${className}`  }>
        {children}
      </div>
    </Provider>

  )
}
