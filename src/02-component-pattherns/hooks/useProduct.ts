import { useEffect, useRef, useState } from "react";
import { OnChangesArgs, Product, InitialValues } from '../interfaces/products.interface';

interface UseProductsArgs {
  product:Product;
  onChange?: (args:OnChangesArgs) => void;
  value?: number;
  initialValues?: InitialValues
}  

export const useProduct = ({product,onChange,value=0,initialValues}: UseProductsArgs) => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false)

    const increaseBy = (value:number) => {
      // if(isControlled.current){
      //   return onChange!({count: value,product});
      // }
      
      let newValue =  Math.max(counter+value,0);
      // newValue = (initialValues?.maxCount && newValue > initialValues?.maxCount) ? initialValues?.maxCount: newValue;
      newValue = (initialValues?.maxCount) ? Math.min(newValue,initialValues.maxCount): newValue;

      setCounter(newValue);
      onChange && onChange({count: newValue,product});
    }

    const reset = () => {
      setCounter(initialValues?.count || value);
    }
    
    useEffect(() => {
      if(!isMounted.current) return;
      setCounter(value);
    }, [value]);

    useEffect(() => {
      isMounted.current = true;
    }, []);
    
    
  return {
    counter,
    increaseBy
    ,isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount ==counter,
    reset
  }
  
}
