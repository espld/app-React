import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../Context/CartContext";


function ItemDetail({ item }) {

  //asi me traigo lo del contexto.
  // const { user, edad, mail } = useContext(CartContext);
  // console.log(`User: ${user} edad: ${edad} Mail: ${mail}`);

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  //manejo los estados y funciones por referencia del componente padre(ItemDetail) y se los puedo pasar al hijo(itemcount) tranquilamente por props
  const [cantidad, setCantidad] = useState(1);

  function handleRestar() {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  function handleSumar() {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  //para que agregarAlCarrito pueda llevar los parametro, lo hago en funcion anonima

  return (

    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo}></img>
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">Precio ${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
            handleAgregar={() => agregarAlCarrito(item, cantidad)}
          />
        </div>
      </div>
    </div>

  )
}

export default ItemDetail