import 'zone.js';
import { useEffect, useRef } from 'react';

export function App() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      loadModules();
      isMounted.current = true;
    }
  }, []);

  const loadModules = async () => {
    const { bootstrap: bootstrapCart } = await import('cart/Module');
    const { bootstrap: bootstrapBudget } = await import('budget/Module');
    const { bootstrap: bootstrapProducts } = await import('products/Module');
    bootstrapCart(); // load angular cart app
    bootstrapBudget('#budget'); // load vue budget app
    bootstrapProducts(document.getElementById('products') as HTMLElement); // load svelte products app
  };

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
      <div id="products" />
      <div id="cart">
        {/* @ts-ignore */}
        <app-cart-component />
      </div>
      <div id="budget" />
    </div>
  );
}

export default App;
