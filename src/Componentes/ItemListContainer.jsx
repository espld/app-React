import { useEffect, useState } from "react";
import { traerDatos } from "../Helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  //PARA LOS DATOS CON NEW PROMISE()

  // useEffect(() => {
  //   pedirDatos()
  //     .then((res) => {
  //       if (categoria) {
  //         //si hay una categoria en el params, que muestre los que matchean
  //         setProductos(res.filter((prod) => prod.categoria === categoria));
  //         //seteo el titulo con el param de la categoria (medias,buzos,etc)
  //         setTitulo(categoria);
  //       } else {
  //         //si no hay categoria en el params que muestre todos los prod
  //         setProductos(res);
  //         //y el titulo productos
  //         setTitulo("Productos");
  //       }
  //     })
  // }, [categoria]) //le digo que se ejecuta cuando el parametro categ cambia.

  //LOS DATOS CON FETCH Y .THEN

  // useEffect(() => {
  //   traerDatos()
  //     .then((res) => {
  //       if (categoria) {
  //         setProductos(res.filter((prod) => prod.categoria === categoria));
  //         setTitulo(categoria);
  //       } else {
  //         setProductos(res);
  //         setTitulo("Productos");
  //       }
  //     })
  // }, [categoria])


  //DATOS CON ASYNC AWAIT, HAGO UNA FUNCION ANONIMA AUTOEJECTUABLE

  // useEffect(() => {
  //   (async () => {
  //     const datos = await traerDatos();
  //     if (categoria) {
  //       setProductos(datos.filter((prod) => prod.categoria === categoria));
  //       setTitulo(categoria);
  //     } else {
  //       setProductos(datos);
  //       setTitulo("Productos");
  //     }
  //   })();
  // }, [categoria]);

  //DATOS CON ASYNC AWAIT HAGO UNA FUNCION ASYNC DENTRO DEL USE EFFECT

  useEffect(() => {
    async function cargarDatos() {
      const datos = await traerDatos();

      if (categoria) {
        setProductos(datos.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(datos);
        setTitulo("Productos");
      }
    }

    cargarDatos();
  }, [categoria]);


  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer
