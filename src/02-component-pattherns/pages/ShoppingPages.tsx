import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";



const product = products[0];


export const ShoppingPages = () => {



  return (
    <div className="">
      <h1>Shopping store</h1>
      <hr />

      <ProductCard key={product.id} product={product} 
        initialValues={{
          count: 2,
          maxCount: 10
        }}
      >
        {({reset,count,isMaxCountReached,increaseBy}) => (<>
          <ProductImage  />
          <ProductTitle  />
          <ProductButtons  />

         
        </>)}

      </ProductCard>

    </div>
  )
}
