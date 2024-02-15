import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string,
  style?: CSSProperties
}

export const ProductButtons = ({ className = "" }: Props) => {
  // Todo: Obtener maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReched = useCallback(
    () => {
      return !!maxCount && counter == maxCount
    },
    [counter, maxCount]
  );

  // TODO_ isMaxReched , = useCallBack[counter,maxCount]
  // True so el count === maxCount , False: si no lo es
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReched() ? styles.disabled: ''}`} onClick={() => increaseBy(+1)}>+</button>
    </div>
  )
}
