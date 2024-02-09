import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";
import { useShoppingCart } from "../hooks";





export const ShoppingPages = () => {
  
  const {shoppingCart,onProductCountChange} = useShoppingCart();


  return (
    <div className="">
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>

        {products.map(product => (
          <ProductCard key={product.id} product={product} className="bg-dark text-bold"
            onChange={onProductCountChange} value={shoppingCart[product.id]?.count || 0}>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard key={key} style={{ width: "100px" }}
            product={product} className="bg-dark text-bold" onChange={onProductCountChange} value={product.count}>
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-button" style={{ display: "flex", justifyContent: "center" }} />
          </ProductCard>

        ))}
        {/* {products.map(prod => {
          if (shoppingCart[prod.id]) {
            return <ProductCard key={prod.id} style={{ width: "100px" }}
              product={shoppingCart[prod.id]} className="bg-dark text-bold" onChange={onProductCountChange}>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-button" style={{ display: "flex", justifyContent: "center" }} />
            </ProductCard>
          }
        })} */}
      </div>

      <code>{JSON.stringify(shoppingCart)}</code>
    </div>
  )
}
