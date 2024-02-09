import { useEffect, useState } from "react";
import { OnChangesArgs, Product } from "../interfaces/products.interface";

interface UseProductsArgs {
  product:Product;
  onChange?: (args:OnChangesArgs) => void;
  value?: number;
}  

export const useProduct = ({product,onChange,value=0}: UseProductsArgs) => {
    
    const [counter, setCounter] = useState(value);

   
    

    const increaseBy = (value:number) => {
      // if(isControlled.current){
      //   return onChange!({count: value,product});
      // }
      
      const newValue =  Math.max(counter+value,0);
      setCounter(newValue);
      onChange && onChange({count: newValue,product});
    }
    useEffect(() => {
      setCounter(value);
    }, [value]);
    
  return {
    counter,increaseBy
  }
  
}
