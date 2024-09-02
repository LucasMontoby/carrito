// Componente Carrito.jsx
const Carrito = ({ carrito, setCarrito }) => {
    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (productoId) => {
      // Filtra el carrito, eliminando el producto con el id especificado
      setCarrito((prevCarrito) =>
        prevCarrito.filter((producto) => producto.id !== productoId)
      );
    };
  
    return (
      <div>
        <h1>Carrito</h1>
        {carrito.length > 0 ? (
          carrito.map((producto) => (
            <div key={producto.id}>
              <h2>{producto.nombre}</h2>
              <p>Cantidad: {producto.cantidad}</p>
              {/* Botón para eliminar el producto del carrito */}
              <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
    );
  };
  
  export default Carrito;
  

