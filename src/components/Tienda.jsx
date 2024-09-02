import React, {useState} from 'react';
import ListaProductos from './ListaProductos';

const Tienda = ({setCarrito}) =>{
    const [productos] = useState([
        {id: 1, nombre: 'Producto 1', precio: 100},
        {id: 2, nombre: 'Producto 2', precio: 200},
        {id: 3, nombre: 'Producto 3', precio: 300},
    ])

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
          // Buscar si el producto ya está en el carrito
          const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      
          // Si el producto ya está en el carrito, actualizar su cantidad
          if (productoExistente) {
            // Crear un nuevo arreglo con el producto actualizado
            return prevCarrito.map((item) =>
              item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 } // Incrementar la cantidad del producto existente
                : item // Dejar los demás productos sin cambios
            );
          } else {
            // Si el producto no está en el carrito, agregarlo
            return [...prevCarrito, { ...producto, cantidad: 1 }];
          }
        });
      };
      

    return(
        <div>
            <h1>Tienda</h1>
            <ListaProductos productos={productos} onAgregar={agregarAlCarrito} />
        </div>
    )
}

export default Tienda;