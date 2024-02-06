import { ReactElement,CSSProperties } from "react"
import { Props as TitleProps } from "../components/ProductTitle"
import { Props as ImageProps } from "../components/ProductImage"
import { Props as ButtonProps } from "../components/ProductButtons"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
  }
  
export interface Product {
    id: string,
    title: string,
    img?: string
  }
  
  // interface ProductButtonsProps {
  //   counter: number,
  //   increaseBy: (value: number) => void
  // }
  
  export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
  
  }



  export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (props:TitleProps) => JSX.Element,
    Image: (props:ImageProps) => JSX.Element,
    Buttons:  (props:ButtonProps) => JSX.Element
  }