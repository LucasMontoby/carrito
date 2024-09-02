import React, {useState} from 'react';
import Tienda from './Tienda';
import Navbar from './Navbar';
import Carrito from './Carrito';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  return(
    <div>
      <Navbar carrito={carrito} />
      <Tienda setCarrito={setCarrito} />
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </div>
  )
}

export default App;