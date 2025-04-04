// TRAER DATOS CON IMPORT Y NEW PROMISE(LOS DATOS DENTRO DEL SRC)

//import data from "../data/data.json"

// export function pedirDatos(){
//     return new Promise((resolve,reject) => {
//         resolve(data);
//     })
// }


//TRAER DATOS CON FETCH Y .THEN (DATOS POR FUERA DEL SRC)

// export function traerDatos() {
//     return fetch("/data.json")
//         .then((response) => {
//             return response.json();
//         });
// }


//TRAE DATOS CON ASYNC AWAIT

export async function traerDatos(){
    const promesa = await fetch("/data.json");
    const json = await promesa.json();
    return json;
}


export function pedirDatosPorId(id){
    return new Promise((resolve,reject) => {

        const item = data.find((elemento) => elemento.id === id)

        if(item){
            resolve(item)
        }else{
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}


