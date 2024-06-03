
import { ProductContext } from "./ProductContext"
import { useProduct } from "../hooks/useProduct"




export const ProductProvider = ({ children }) => {

    const { products, dispatch, onNewProduct, onDeleteProduct } = useProduct()

    return(
        <ProductContext.Provider value={{ products, dispatch, onNewProduct, onDeleteProduct }}>
            { children }
        </ProductContext.Provider>
    )
}
