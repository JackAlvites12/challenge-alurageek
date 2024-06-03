import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";
import { registerSuccess } from "../alerts/registerSuccess";
import { useForm } from "../hooks/useForm";


export const ProductAdd = () => {

  const { onNewProduct } = useContext( ProductContext )

  const { nombre, precio, imagen, file, fileInputRef, onInputChange, onFileChange, onResetForm } = useForm({
      nombre: '',
      precio: '',
      imagen: '',
  })


  const onSubmit = async ( event ) => {

      event.preventDefault()

      if( nombre.trim().length <= 1 || precio.trim().length <= 1 || !imagen ) return

      onNewProduct( file, nombre, precio )

      registerSuccess()

      onResetForm()

  }



  return (

    <form onSubmit={ onSubmit } className="products__form">
            
        <h2 className="products__form__title">Agregar Producto:</h2>
        
        <div className="products__form__inputs">
            <input type="text" placeholder="Nombre..." name="nombre" value={ nombre } onChange={ onInputChange } maxLength="15"/>
            <input type="number" placeholder="precio..." name="precio" value={ precio } onChange={ onInputChange } /> 
            <input type="file" placeholder="imagen..." name="imagen" onChange={ onFileChange } ref={ fileInputRef }/>
        </div>

        <div className="products__form__botones">
            <button className="boton__enviar">Enviar</button>
            <button className="boton__limpiar" onClick={ onResetForm }>Limpiar</button>
        </div>

    </form>

  )
}
