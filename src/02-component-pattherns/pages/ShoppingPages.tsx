import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components"
import '../styles/custom-styles.css';

const product = {
  id:"dasdsdd",
  title: "Nombre",
  img: './coffee-mug.png'

}

export const ShoppingPages = () => {
  return (
    <div className="">
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        <ProductCard product={product} className="bg-dark text-bold">
          <ProductCard.Image  className="custom-image"/>
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-button"/>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-bold">
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title="Otro Producto"  className="text-white" />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor:"#70D1F8"}}>
          <ProductImage img={product.img} />
          <ProductTitle title="Otro Producto" style={{color:"black", fontWeight: "bold"}} />
          <ProductButtons  />
        </ProductCard>

      </div>
    </div>
  )
}
