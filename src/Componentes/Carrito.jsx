import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

function Carrito() {

    const { carrito, precioTotalCarrito, vaciarCarrito } = useContext(CartContext)

    function handleVaciar() {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title"> Carrito</h1>

            {
                carrito.map((producto) => (
                    <div key={producto.id}>
                        <h1>{producto.titulo}</h1>
                        <p>Precio unitario: $ {producto.precio}</p>
                        <p>Precio total: $ {producto.precio * producto.cantidad}</p>
                        <p>Cantidad : {producto.cantidad}</p>
                        <p></p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio Total: {precioTotalCarrito()}</h2>
                        <button onClick={handleVaciar}>VACIAR</button>
                    </> :
                    <p>Carrito vacio.</p>
            }


        </div>
    )
}

export default Carrito