const ListaProductos = ({productos, onAgregar}) =>{
    return(
        <div>
            <h1>Lista de Productos</h1>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <button onClick={() => onAgregar(producto)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    )
}

export default ListaProductos;