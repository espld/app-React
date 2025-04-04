import { Link } from "react-router-dom"

function Item({ producto }) {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoría: {producto.categoria}</p>
        <p>Stock disponible: {producto.stock}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
      </div>

    </div>
  )
}

export default Item