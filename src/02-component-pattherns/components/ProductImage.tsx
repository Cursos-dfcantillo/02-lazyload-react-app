import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string
  img?: string,
  style?: CSSProperties
}

export const ProductImage = ({ img = "", className }:Props) => {
    const {product} = useContext(ProductContext);
    const imageToShow: string = (img) ? img: (product.img) ? product.img :noImage;
    return (
      <img className={`${styles.productImg} ${className}`} src={imageToShow} alt="Product" />
    )
  }