import { ReactElement,CSSProperties } from "react"
import { Props as TitleProps } from "../components/ProductTitle"
import { Props as ImageProps } from "../components/ProductImage"
import { Props as ButtonProps } from "../components/ProductButtons"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties,
    onChange?: (args:OnChangesArgs)=> void,
    value?: number

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

  export interface OnChangesArgs {
    product:Product,count:number
  }



  export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (props:TitleProps) => JSX.Element,
    Image: (props:ImageProps) => JSX.Element,
    Buttons:  (props:ButtonProps) => JSX.Element
  }