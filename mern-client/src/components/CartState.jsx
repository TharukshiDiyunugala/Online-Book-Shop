import React, { useState } from 'react';
import Shop from './Shop';
import ManageBooks from './ManageBooks';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      <Shop addToCart={addToCart} />
      <ManageBooks cart={cart} />
    </div>
  );
}

export default App;
