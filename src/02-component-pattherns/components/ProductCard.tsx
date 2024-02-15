import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import {  createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/products.interface";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product,className,style,onChange,value,initialValues }: ProductCardProps) => {

  const { counter, increaseBy,isMaxCountReached,reset } = useProduct({
    product,onChange,value,initialValues
  });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount:initialValues?.maxCount
    }}>
      <div style={style} className={`${styles.productCard} ${className}`  }>
        {/* {children} */}
        {children({
          count:counter,
          isMaxCountReached,product,
          maxCount: initialValues?.maxCount
          ,increaseBy,reset
        })}
      </div>
    </Provider>

  )
}
