import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";



const product = products[0];


export const ShoppingPages = () => {



  return (
    <div className="">
      <h1>Shopping store</h1>
      <hr />

      <ProductCard key={product.id} product={product} className="bg-dark text-bold"
        initialValues={{
          count: 2,
          maxCount: 10
        }}
      >
        {({reset,count,isMaxCountReached,increaseBy}) => (<>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-button" />

          <button onClick={reset}>Reset</button>
          {count>0 && <button onClick={()=>increaseBy(-2)}>-2</button>}
          {!isMaxCountReached && <button onClick={()=>increaseBy(2)}>+2</button>}
          <span style={{color:"white"}}>{count}</span>

        </>)}

      </ProductCard>

    </div>
  )
}
