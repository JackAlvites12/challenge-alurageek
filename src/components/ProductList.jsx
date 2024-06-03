import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { ProductItem } from "./ProductItem"

export const ProductList = () => {

  const { products, onDeleteProduct } = useContext( ProductContext )


  return (

    <div className="container">

        <h2 className="products__list__title">Mis productos </h2>

        {
          ( products.length === 0 ) ? (<h2 className="no-products">No hay Productos</h2>) 
          : 
          <ul className="products__list">
              {
                  products.map(({ id, nombre, precio, imagen }) => (
                      <ProductItem key={ id } id={ id } nombre={ nombre } precio={ precio } imagen={ imagen } onDeleteProduct={ onDeleteProduct }/>
                  ))
              }
          </ul>
        }



    </div>

  )
}
