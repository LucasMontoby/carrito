// Componente Navbar.jsx
const Navbar = ({ carrito }) => {
    // Calcular la cantidad total de productos sumando las cantidades en el carrito
    const totalProductos = carrito.reduce((total, producto) => {
      return total + (producto.cantidad || 0); // Asegurarse que 'cantidad' existe y es un número
    }, 0); // Valor inicial de la suma es 0
  
    return (
      <nav >
        <h1>Tienda</h1>
        <div>
          {/* Mostrar el número total de productos en el carrito */}
          <span>Carrito: {totalProductos} productos</span>
        </div>
      </nav>
    );
  };
  
  export default Navbar;