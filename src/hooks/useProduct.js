import { useEffect, useReducer } from "react";
import { productsReducer } from "../reducer/productsReducer";
import { types } from "../types/types";
import { v4 as uuid } from 'uuid'
import { uploadFile } from "../firebase/config";

const init = () => {
    return JSON.parse( localStorage.getItem('products') ) || [];
}

export const useProduct = () => {

    const [ products, dispatch ] = useReducer( productsReducer, [], init )

    useEffect(()=> {
        localStorage.setItem( 'products', JSON.stringify( products ))
    }, [ products ])

    const onNewProduct = async ( file, nombre, precio ) => {

        const downloadURL = await uploadFile( file );


        const newProduct = { 
            id: uuid(),
            nombre,
            precio,
            imagen: downloadURL,
        }
  
        dispatch({
          type: types.addProduct,
          payload: newProduct,
        })
    }

    const onDeleteProduct = ( id ) => {

        dispatch({
            type: types.deleteProduct,
            payload: id,
        })

    }


    return {
        products,
        dispatch,
        onNewProduct,
        onDeleteProduct,
    }
}
