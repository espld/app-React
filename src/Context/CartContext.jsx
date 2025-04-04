import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    function agregarAlCarrito(item, cantidad) {
        //spread operator, traigo el item completo, todas las propiedad de item y le agrego la propiedad cantidad que estamos teniendo como estado
        //va a servir cuando trabajamos con BDD
        const itemAgregado = { ...item, cantidad: cantidad }

        // React usa la reconciliación para detectar cambios en el estado y 
        // volver a renderizar los componentes cuando sea necesario. 
        // Si modificas directamente carrito, React no detectará que hubo un cambio y no actualizará la UI correctamente.
        //Al hacer una copia, creas un nuevo array, lo que permite que React detecte el cambio y actualice la UI:
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = carrito.find((p) => p.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        // Cuando haces setCarrito(nuevoCarrito), 
        // React nota la diferencia y vuelve a renderizar el componente.
        setCarrito(nuevoCarrito);
    }

    function cantidadEnCarrito() {
        // let cantidadProd = 0;

        // carrito.forEach((producto) => {
        //   cantidadProd += producto.cantidad;
        // })

        // return cantidadProd;

        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
    function precioTotalCarrito() {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
    function vaciarCarrito() {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])


    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotalCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}