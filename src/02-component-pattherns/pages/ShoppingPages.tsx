import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components"

const product = {
  id:"dasdsdd",
  title: "Nombre",
  img: './coffee-mug.png'

}

export const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        <ProductCard product={product}>
          <ProductCard.Image  />
          <ProductCard.Title/>
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title="Otro Producto" />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
