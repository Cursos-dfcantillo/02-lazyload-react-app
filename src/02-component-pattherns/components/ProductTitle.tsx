import {  CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
   className?:string
   style?: CSSProperties
   title?: string,
}

export const ProductTitle = ({ title, className,style }:Props) => {
    const {product} = useContext(ProductContext);
    const titleToShow = title ? title: product.title;
    return (
      <span style={style} className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
  }