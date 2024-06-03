
export const ProductItem = ({ id, nombre, precio, imagen, onDeleteProduct }) => {

  return (

    <li key={ id } className="products__list__item">

        <figure className="list__item__figure">
            <img className="list__item__img" src={ imagen } alt="producto" />
        </figure>

        <h5 className="list__item__content__title">{ nombre }</h5>
        
        <div className="list__item__content">
            <span className="list__item__content__price">${ precio }</span>
            <i className='bx bxs-trash bx-sm' onClick={ () => onDeleteProduct( id ) }></i>
        </div>

    </li>

  )

}
