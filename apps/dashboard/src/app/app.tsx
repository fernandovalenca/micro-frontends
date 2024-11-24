import 'zone.js';
import { bootstrap } from 'cart/Module';
// @ts-ignore
import { default as ProductsApp } from 'products/Module';
import { useEffect, useRef } from 'react';

export function App() {
  const isMounted = useRef(false);
  const productsRef = useRef<any>(null);
  
  useEffect(() => {
    if (!isMounted.current) {
      bootstrap();
      new ProductsApp({
        target: productsRef.current,
      });
      isMounted.current = true;
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome Dashboard 👋
          </h1>
        </div>
      </div>
      <div id="products" ref={productsRef} />
      <div id="cart">
        {/* @ts-ignore */}
        <app-cart-component />
      </div>
    </div>
  );
}

export default App;
