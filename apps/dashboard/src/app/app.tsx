import 'zone.js';
import { bootstrap } from 'cart/Module';
import { useEffect, useRef, lazy, Suspense } from 'react';
const Products = lazy(() => import('products/Module'));

export function App() {
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (!isMounted.current) {
      bootstrap();
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
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <app-cart-component />
      </Suspense>
    </div>
  );
}

export default App;
