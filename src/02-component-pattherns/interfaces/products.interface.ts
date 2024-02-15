import { CSSProperties } from "react"
import { Props as TitleProps } from "../components/ProductTitle"
import { Props as ImageProps } from "../components/ProductImage"
import { Props as ButtonProps } from "../components/ProductButtons"


export interface InitialValues{
  count?:number;
  maxCount?:number;
}

export interface ProductCardProps {
    product: Product,
    // children?: ReactElement | ReactElement[],
    children: (args:ProductCardHandlers) => JSX.Element
    className?: string,
    style?: CSSProperties,
    onChange?: (args:OnChangesArgs)=> void,
    value?: number,
    initialValues?: InitialValues

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
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void
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

  export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product:Product;
    increaseBy:(value:number) => void;
    reset:() => void;


  }