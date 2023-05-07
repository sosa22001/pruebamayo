let productos = [];
const obtenerProductos = () =>{
    fetch('http://localhost:2000/productos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(resultado=>{
        return resultado.json();
    })
    .then(resultado=>{
        productos = resultado;
    })
    .catch(error=>{
        console.log(error);
    })
}

const renderProductos = () =>{

}