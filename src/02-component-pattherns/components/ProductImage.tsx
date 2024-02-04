import { useContext } from "react";
import styles from "../styles/styles.module.css";

import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
    const {product} = useContext(ProductContext);
    const imageToShow: string = (img) ? img: (product.img) ? product.img :noImage;
    return (
      <img className={styles.productImg} src={imageToShow} alt="Product" />
    )
  }